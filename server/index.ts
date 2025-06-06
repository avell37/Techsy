require("dotenv").config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const path = require('path');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.DEPLOY_URL : process.env.LOCAL_URL,
    credentials: true
}));
app.use(cookieParser());
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