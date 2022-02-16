const sequelize = require('../config/connection');
const seedInstruments = require('./instrument-seeds');
const seedUsers = require('./user-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  await seedInstruments();
  

  process.exit(0);
};

seedAll();
