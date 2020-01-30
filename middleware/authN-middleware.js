const bc = require('bcryptjs');
const deptsDb = require('../depts/depts-model');

const reg_authN_stack = [
  reg_authN_validation,
  reg_authN_affixHaus
]

const login_authN_stack = [

]

const hauses = {

}

module.exports = {
  reg_authN_stack,
  login_authN_stack,
  hauses
}

function reg_authN_validation(req, res, next) {
  const {username, password, haus} = req.body;
  if (username && password && haus) {
    req.body.password = bc.hashSync(password, 6);
    next();
  } else {
    res.status(400).json({ message: `status 400: missing credentials in payload body, request could not be processed` })
  }
}

function reg_authN_affixHaus(req, res, next) {
  const haus = req.body.haus.toLowerCase();
  const normalizedHaus = haus.charAt(0).toUpperCase() + haus.slice(1);
  
  deptsDb.findHausByName(normalizedHaus)
    .then( resou => {

      // resou.id = dept_id
      // req.body.username = username
      // req.body.password = password
      const newUser = {
        dept_id: resou.id,
        username: req.body.username,
        password: req.body.password
      }

      req.body.newUser = newUser;
      next();
    })
    .catch(err => {
      console.log(err);
    })

}