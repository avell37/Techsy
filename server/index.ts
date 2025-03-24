require("dotenv").config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes.ts');
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
// app.use('/api', router)

app.post('/users', async (req: any, res: any) => {
    const { email, password } = req.body;
    const newUser = await prisma.user.create({
        data: {
            email,
            password
        }
    });
    res.json(newUser);
})

async function start() {
    try {
        app.listen(PORT, () => console.log("Server started on " + PORT))
    } catch (e) {
        console.log(e);
    }
}

start();