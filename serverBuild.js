const express = require('express');

const server = express();

const build = require('./middleware/serverBuild-middleware');

build(server);

const apiRouter = require('./api/api-router');

server.use('/api', apiRouter);

server.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found in server`})
})

module.exports = server;