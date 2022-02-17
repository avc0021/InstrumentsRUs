const sequelize = require('../config/connection');
const seedInstruments = require('./post-seeds');
const seedUsers = require('./user-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: false });
  
  await seedUsers();
  await seedInstruments();
  

  process.exit(0);
};

seedAll();
