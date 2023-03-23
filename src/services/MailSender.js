import { MailCompositer } from "../utils/MailCompositer.js";
import nodemailer from 'nodemailer'

export class MailSender {
    constructor(client) {
        this.client = { ...client }
    }

    async sendMail() {
        const configs = new MailCompositer(this.client)
        const transporter = nodemailer.createTransport(configs.serverConfig)
        try {
            await transporter.sendMail(configs.admMessage)
            await transporter.sendMail(configs.clientMessage)

            return { status: 200 }
        } catch (err) {
            return {
                message: err.message,
                error: err
            }
        }

    }
}