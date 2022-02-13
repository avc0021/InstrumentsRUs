const { Instruments } = require('../models');

const instrumentDetails = [
  {
    instrument: 'Tenor Saxophone',
    brand_name: 'Yamaha Custom Z',
    price: 5100,
    filename: 'tenorsax.png',
    user_id: 1
  },
  {
    instrument: 'Banjo',
    brand_name: 'Epiphone MB-100 First Pick Banjo',
    price: 250,
    filename: 'banjo.png',
    user_id: 1
  },
];

const seedInstruments = () => Instruments.bulkCreate(instrumentDetails);

module.exports = seedInstruments;