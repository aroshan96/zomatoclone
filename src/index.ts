const express = require("express");
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const database = require('./server/index')

const app=express();

app.use(bodyParser.json());
app.use(()=>database);
app.listen(process.env.NODE_PORT, () => {
    console.log(`Listening on PORT ${process.env.NODE_PORT}`);
});
