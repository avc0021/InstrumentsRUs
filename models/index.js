const User = require('./User');
const Instruments = require('./Post');

// create associations
User.hasMany(Instruments, {
    foreignKey: 'user_id',
    constraints: false
  });

Instruments.hasMany(User, {
    constraints: false,
    foreignKey: 'instrument_id'
  }); 

module.exports = { User, Instruments };
