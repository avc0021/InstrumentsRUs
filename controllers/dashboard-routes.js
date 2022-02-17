const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Instruments } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    console.log('hello this i sthe route we are htting ')
  Instruments.findAll({
      where: {
          user_id: req.session.user_id
      },
      attributes: [
          'id',
          'instrument',
          'brand_name',
          'price',
          'url',
      ],
      include: [
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
  .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true, user_edit: true });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;
