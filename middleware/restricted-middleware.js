require('dotenv').config();
const jwt = require('jsonwebtoken');

function restrict(req, res, next) {
  if(req.url.includes('restricted')) {
    const authorization = req.headers.authorization;
    const token = jwt.verify(authorization, process.env.JWT_SECRET);
    if(token) {
      req.token = token;
      console.log(token);
      next();
    } else {
      res.status(401).json({ message: `status 401: token authorization failed` })
    }
  } else {
    next();
  }


}

module.exports = restrict;