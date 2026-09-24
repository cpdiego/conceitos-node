import express from 'express'
import { PrismaClient } from './generated/prisma/client.js'

const app = express()
app.use(express.json())

const users = []

const prisma = new PrismaClient()

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json({ message: 'Usuário criado com sucesso!'})
})

app.listen(3000, () => console.log('Server ir running'))

// mongodb+srv://diegocp:<db_password>@users.kbsaatu.mongodb.net/?appName=Users