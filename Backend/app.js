const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('./utils/logger');
const cors = require('cors')
const routeManager = require('./routes')
require('dotenv').config()

const app = express();

const port = process.env.PORT;

//connection to the database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => logger.log({
    level: "info",
    message: "Connected to DB"
}))

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.use('/', routeManager)

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client/build'));
});

app.listen(port, () => {
    logger.log({
        level: 'info',
        message:`listening to port ${port}`
    })
})