'use strict';

// Requires
const express = require("express");
const bodyParser = require("body-parser");

// Execute express
const app = express();
// Load routes files

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS

// Re-write routes

// Route/Method test
app.get('/api'), (req, res) => {
    return res.status(200).send("<h1>Hello worls i'm backend</h1>");
    // return res.status(200).send({
    //     message: 'Hello World from the server-side'
    // });
}

// Export module
module.exports = app;