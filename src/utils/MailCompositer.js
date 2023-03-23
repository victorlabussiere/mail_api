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
            to: process.env.ADM_MAIL,
            replyTo: client.email,
            subject: `Mensagem do Client: ${client.name}`,
            text: `\nMensagem de: ${client.name}\nConteúdo da Mensagem: ${client.text}\nE-mail do Client: ${client.email}`,
            envelope: {
                from: this.serverConfig.auth.user,
                to: process.env.ADM_MAIL,
            }
        }

        this.clientMessage = {
            from: this.serverConfig.auth.user,
            to: client.email,
            replyTo: process.env.ADM_MAIL,
            subject: `Olá, ${client.name}! Obrigado por usar minha plataforma!`,
            text: `Obrigado, ${client.name} pela mensagem! A sua mensagem será lida e, caso tenha sido solicitado, entrarei em contato o mais breve possível!`,
            envelope: {
                from: this.serverConfig.auth.user,
                to: client.email,
            }
        }
    }
}