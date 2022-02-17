const { Post } = require('../models');

const instrumentDetails = [
  {
    instrument: 'Tenor Saxophone',
    brand_name: 'Yamaha Custom Z',
    price: 5100,
    url: 'https://shop.brianmayguitars.co.uk/user/products/large/BMG%20Arielle%202021%2001.jpg',
    user_id: 1
  },
  {
    instrument: 'Banjo',
    brand_name: 'Epiphone MB-100 First Pick Banjo',
    price: 250,
    url: 'https://shop.brianmayguitars.co.uk/user/products/large/BMG%20Arielle%202021%2001.jpg',
    user_id: 2
  },
];

const seedInstruments = () => Post.bulkCreate(instrumentDetails);

module.exports = seedInstruments;