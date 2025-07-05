require("dotenv").config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const path = require('path');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const origins = [process.env.LOCAL_URL, process.env.DEPLOY_URL, process.env.PROD_URL];

app.use(cors({
    origin: origins,
    credentials: true,
}));

app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api', router);

app.use(errorHandler);

async function start() {
    try {
        app.listen(PORT, '0.0.0.0', () => console.log("Server started on " + PORT))
    } catch (e) {
        console.log(e);
    }
}

start();