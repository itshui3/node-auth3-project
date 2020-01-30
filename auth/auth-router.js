require('dotenv').config();
const express = require('express');
const router = express.Router();

const authDb = require('./auth-model');

const bcryj = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  const user = req.body;
  const { username, password, haus } = user;
  if (user && username && password && haus) {
    user.password = bcryj.hashSync(password, 8);
    authDb.registerAccount(user)
      .then( resou => {
        console.log(resou);
        res.status(200).json({ message: `status 200: successfully registered a new user!`, resource: resou })
      })
      .catch( err => {
        res.status(500).json({ message: `status 500: internal status error, could not register user` })
        console.log(err);
      })
  }
})

router.post('/login', (req, res) => {
  const user = req.body;
  const { username, password } = user;
  // locate user
  authDb.findUserByUsername(username)
    .then( resou => {
      if(resou && bcryj.compareSync(password, resou.password)) {
        
        const payload = {
          username: username,
          haus: resou.haus
        }
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(
          payload,
          secret,
          // options
        )

        res.status(200).json({ message: `status 200: logged in. welcome`, token: token })
      } else {
        res.status(401).json({ message: `status 401: couldn\'t log in, check your credentials` })
      }
    })
})

router.get('/logout', (req, res) => {

})

module.exports = router;