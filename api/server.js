const express = require('express');



const endpoints = require('../endpoints/endpoints.js');


const server = express();
server.use(express.json());



server.use('/api/endpoints', endpoints);

server.get('/', (req, res) => {
  res.send("Server is up and running");
});



module.exports = server;