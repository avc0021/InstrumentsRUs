const { Post } = require('../models');

const instrumentDetails = [
  {
    title: 'Tenor Saxophone for Sale',
    description: 'Yamaha Custom Z- Used. Contact (000)000-000 for more info',
    image_url: 'https://shop.brianmayguitars.co.uk/user/products/large/BMG%20Arielle%202021%2001.jpg',
    user_id: 1
  },
  {
    title: 'Banjo for Sale',
    description: 'Epiphone MB-100 First Pick Banjo- New. Contacted (000)000-000 for more info',
    image_url: 'https://shop.brianmayguitars.co.uk/user/products/large/BMG%20Arielle%202021%2001.jpg',
    user_id: 2
  },
];

const seedInstruments = () => Post.bulkCreate(instrumentDetails);

module.exports = seedInstruments;