const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodeMailer = require('nodemailer');

const app = express()
const port = 3000;
const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect('mongodb+srv://shai:almog@cluster0.sq6uvah.mongodb.net/').then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.log('Failed to connect to MongoDB')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})