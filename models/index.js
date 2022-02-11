const User = require('./User');
const Instruments = require('./Instruments');

// create associations
User.hasMany(Instruments, {
    foreignKey: 'user_id'
  });

Instruments.belongsTo(User, {
    foreignKey: 'instrument_id'
  }); 

module.exports = { User, Instruments };