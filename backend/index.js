const express = require('express')
const cors = require('cors');
require('dotenv').config();
const connectDB = require("../config/db");
const colors = require('colors');
const userRoutes = require('../Routes/userRoutes')
const { notFound, errorHandler } = require('../middlewares/errormiddleware');


connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

//middleware
app.use(cors());
app.use(express.json());

const { chats } = require('../data/data');

app.get('/chats', async (req, res) => {
    res.send(chats)
})

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.get('/', async (req, res) => {
    res.send("let's chat server is running");
})

app.listen(port, () => {

    console.log(`let's chat server is running on port ${port}`.yellow.bold);
});
