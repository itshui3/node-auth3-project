const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const buildServer = server => {
  server.use(express.json());
  server.use(cors());
  server.use(helmet());
  server.use(morgan('common'));
}

module.exports = buildServer;