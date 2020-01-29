const express = require('express');
const server = express();

const buildServer = require('./middleware/serverBuild-middleware');
buildServer(server);

module.exports = server;