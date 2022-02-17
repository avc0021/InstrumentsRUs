const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Post.create({ // creates new POST for user loggedin
            instrument: req.body.instrument,
            brand_name: req.body.brand_name,
            price: req.body.price,
            url: req.body.url,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});


  module.exports = router;

