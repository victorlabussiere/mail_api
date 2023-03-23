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
            replyTo: client.email,
            subject: `Mensagem de ${client.name}`,
            text: client.text,
            envelope: {
                from: this.serverConfig.auth.user,
                to: process.env.ADM_MAIL,
            }
        }

        this.clientMessage = {
            from: this.serverConfig.auth.user,
            to: client.email,
            replyTo: process.env.ADM_MAIL,
            subject: `Obrigado por usar minha plataforma!`,
            text: `Obrigado, ${client.name} pela mensagem! Caso tenha sido solicitado, entrarei em contato!`,
            envelope: {
                from: this.serverConfig.auth.user,
                to: client.email,
            }
        }
    }
}