import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { MailSender } from '../services/MailSender.js'

async function main() {
    dotenv.config()

    const app = express()
    app.use(cors())
    const port = 3000

    app.listen(3000, () => console.log('Server running at port', port))

    app.get('/', await function (req, res) {
        res.send({ 'server running at port': port })
    })

    app.post('/mail', async (req, res) => {

        const mailControl = new MailSender(req.body)
        try {
            await mailControl.sendMail()
            return res.end()
        } catch (err) { console.log('erro de envio', err) }

    })

}

main()