'use strict';

let controller = {
    home: (req, res) => {
        return res.status(200)
            .send({
                message: 'home'
            });
    },
    test: (req, res) => {
        return res.status(200)
            .send({
                message: 'test'
            });
    }
}

module.exports = controller;