const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    //console.log('hello this is the route we are hitting ')
  Post.findAll({
      where: {
          user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'description',
        'image_url',
      ],
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
