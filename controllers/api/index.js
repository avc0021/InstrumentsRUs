const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const posts = require('./posts-routes');

router.use('/users', userRoutes);
router.use('/posts', posts);


module.exports = router;