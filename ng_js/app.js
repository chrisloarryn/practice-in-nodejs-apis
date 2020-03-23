var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var node_routes = require('./routes/nodeRoutes');

// charge routes

// middlewares
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());

// // CORS

// // Rutas
app.use('/api', node_routes);
// app.get('/api/v1/news', (req, res) => {
//     res.status(200).send('hoho')
// })

module.exports = app;