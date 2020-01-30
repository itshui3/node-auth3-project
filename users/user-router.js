const express = require('express');

const router = express.Router();

const userDb = require('./user-model');

router.get('/', (req, res) => {
  userDb.find()
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched users`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch users` })
    })
})

module.exports = router;