import { MailCompositer } from "../utils/MailCompositer.js";
import nodemailer from 'nodemailer'

export class MailSender {
    constructor(client) {
        this.client = { ...client }
    }

    async sendMail() {
        const configs = new MailCompositer(this.client)
        const transporter = nodemailer.createTransport(configs.serverConfig)
        return await transporter.sendMail(configs.clientMessage)
            .then(async () => await transporter.sendMail(configs.admMessage))
            .catch(err => console.error('Erro', err.message))
    }
}