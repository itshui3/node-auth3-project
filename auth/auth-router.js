//build
const express = require('express');
const router = express.Router();
//db
const authDb = require('./auth-model');
//mw
const middleware = require('../middleware/authN-middleware');
const { reg_authN_stack } = middleware;

const sign = require('../middleware/jwt-middleware');

router.post('/register', ...reg_authN_stack, (req, res) => {
  authDb.addUser(req.body.newUser)
    .then( resou => {
      res.status(201).json({ message: `status 201: user successfully added as part of haus ${req.body.haus}`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not add user` })
    })
})

router.post('/login', sign, (req, res) => {
  // req.token in place after sign mw
  res.status(200).json({ message: `status 200: welcome back, ${req.body.username}!`, token: req.token });
})

module.exports = router;