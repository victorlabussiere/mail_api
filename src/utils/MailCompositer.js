import dotenv from 'dotenv'

export class MailCompositer {
    dotenv = dotenv.config()
    constructor(client) {
        this.serverConfig = {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SERVER_MAIL,
                pass: process.env.PASS
            }
        }

        this.admMessage = {
            from: this.serverConfig.auth.user,
            to: client.email,
            subject: `Mensagem de ${client.name}`,
            text: client.text,
            replyTo: client.email,
        }

        this.clientMessage = {
            from: this.serverConfig.auth.user,
            to: client.email,
            subject: `Obrigado por usar minha plataforma!`,
            text: `Obrigado, ${client.name} pela mensagem! Caso tenha sido solicitado, entrarei em contato!`,
            replyTo: process.env.ADM_MAIL,
            envelope: {
                from: this.serverConfig.auth.user,
                to: client.email,
            }
        }
    }
}