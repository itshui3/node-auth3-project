require('dotenv').config();

function sign(req, res, next) {
  const { haus, username } = req.body;
  const payload = {
    username: username,
    haus: haus
  }
  jwt.sign(payload, secret, (err, token) => {
    if(err) {
      console.log(err);
      res.status(500).json({ message: `status 500: internal status error` })
    } else {
      req.token = token;
      next();
    }
  })
}

module.exports = sign;