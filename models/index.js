const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    constraints: false
  });

Post.hasMany(User, {
    constraints: false,
    foreignKey: 'instrument_id'
  }); 

module.exports = { User, Post };
