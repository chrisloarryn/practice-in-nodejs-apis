const express = require('express');
const fs = require('fs');
const request = require('request');
const evironment = require('./dev')
//const path = require('path');
const cors = require('cors');
//const https = require('https');
const fetch = require('node-fetch');

const app = express();

// app.get('/', (req, res) => {
//     res.status(200)
//         .json({
//             message: `hello from the server side`,
//             app: 'myTest'
//         })
// })

// app.use(cors({
//     origin: ['127.0.0.1'],
//     credentials: true
// }))

// app.all('*', (req, res) => {
//     res.header(`Access-Control-Allow-Origin`, `*`);
//     res.header(`Access-Control-Allow-Headers`, `X-Requested-Width`);
//     //next();
// });
// const extServerOptions = {
//     host: 'https://hn.algolia.com',
//     port: '5000',
//     path: '/api/v1/search_by_date?query=nodejs',
//     method: 'GET'
// };
const getNews = () => {
    return JSON.parse(fs.readFileSync(`${__dirname}/dev_data/data.json`));
}
setTimeout(() => getNews(), 3600);

// console.log(getNews());
app.get(`/api/v1/news`, (req, res) => {
    res.status(200)
        .json({
            status: 'success',
            data: {
                news: getNews()
            }
        })
});



const port = evironment.development.nodejs.port_nodejs || 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})