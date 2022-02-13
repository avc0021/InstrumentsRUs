const sequelize = require('../config/connection');
const seedInstruments = require('./instrumentData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedInstruments();

  process.exit(0);
};

seedAll();
