const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');


// route to login.handlebars page
router.get('/login', (req, res) => {
    if (req.session.loggedin) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  module.exports = router;