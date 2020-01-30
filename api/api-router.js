//build
const express = require('express');
const router = express.Router();
const authRouter = require('../auth/auth-router');

router.use('/auth', authRouter);

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found on api` })
})

module.exports = router;