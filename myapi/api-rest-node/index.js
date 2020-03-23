"use strict";

const mongoose = require("mongoose");
let app = require("./app");
let port = process.env.PORT || 5000;
let server = process.env.SERVER || 'localhost';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/api_rest_node', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected Succesfully to MongoDB Database.');
    app.listen(port, () => {
        console.log(`Server http://${server}:${port} is OK.`);
    })
}).catch((err) => {
    console.log(error);
});