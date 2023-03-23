import { MailCompositer } from "../utils/MailCompositer.js";
import nodemailer from 'nodemailer'

export class MailSender {
    constructor(serverConfig) {
        this.serverConfig = serverConfig
    }

    async sendMail(clientConfig) {
        const transporter = nodemailer.createTransport(this.serverConfig)
        try {
            return await transporter.sendMail(clientConfig)
        } catch (err) {
            return {
                message: err.message,
                error: err
            }
        }

    }
}