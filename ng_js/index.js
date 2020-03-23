'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var config = './dev';

mongoose.connect('mongodb://localhost:27017/mongoNode')
    .then(() => {
        console.log('conectado');
        // server on
        app.listen(3000 || 5000, () => {
                console.log(config.development.nodejs.port_nodejs);
            }

            // () => {
            //     console.log('srv corriendo', config.development.nodejs.port_nodejs)
            // })
        );

    })