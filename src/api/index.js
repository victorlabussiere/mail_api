import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { MailSender } from '../services/MailSender.js'
import { MailCompositer } from '../utils/MailCompositer.js'

async function main() {
    dotenv.config()

    const app = express()
    app.use(cors())
    app.use(express.json())

    const port = process.env.PORT || 4000

    app.get('/', await function (req, res) {
        res.send({ 'server running at port': port })
    })

    app.post('/mail', async (req, res) => {
        const mailCompositer = new MailCompositer(req.body)
        const mailControl = new MailSender(mailCompositer.serverConfig)

        try {

            await mailControl.sendMail(mailCompositer.clientMessage)
            await mailControl.sendMail(mailCompositer.admMessage)

            res.status(200)
            return res.end('operation finished')

        } catch (err) { console.log('erro de envio', err) }

    })

    app.listen(port, () => console.log('Server running at port', port))
}

main()