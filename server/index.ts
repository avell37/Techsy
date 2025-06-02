require("dotenv").config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const path = require('path');
const errorHandler = require('./middleware/errorHandlingMiddleware');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use('/api', router);

app.use(errorHandler);

async function start() {
    try {
        app.listen(PORT, () => console.log("Server started on " + PORT))
    } catch (e) {
        console.log(e);
    }
}

start();