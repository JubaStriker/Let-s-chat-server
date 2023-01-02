const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const { chats } = require('../data/data');

app.get('/chats', async (req, res) => {
    res.send(chats)
})

app.get('/', async (req, res) => {
    res.send("let's chat server is running");
})

app.listen(port, () => {

    console.log(`let's chat server is running on port ${port}`);
});
