const express = require('express');

const router = express.Router();

const authRouter = require('../auth/auth-router');
const restrictedRouter = require('./restricted-router');

router.use('/auth', authRouter);
router.use('/restricted', restrictedRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: `welcome to api`})
})

module.exports = router;