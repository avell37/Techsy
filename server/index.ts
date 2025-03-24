require("dotenv").config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes.ts');
const path = require('path');
const fileUpload = require('express-fileupload')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

async function start() {
    try {
        app.listen(PORT, () => console.log("Server started on " + PORT))
    } catch (e) {
        console.log(e);
    }
}

start();