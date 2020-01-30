const express = require('express');
const server = express();

const buildServer = require('./middleware/serverBuild-middleware');
buildServer(server);

const apiRouter = require('./api/api-router');

server.use('/api', apiRouter);

module.exports = server;