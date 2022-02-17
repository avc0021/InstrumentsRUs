const { Post } = require('../models');

const instrumentDetails = [
  {
    title: 'Tenor Saxophone for Sale',
    description: 'Yamaha Custom Z- Used. Contact (000)000-000 for more info',
    image_url: 'https://cdn11.bigcommerce.com/s-ug994agwoe/images/stencil/1280x1280/products/1348/1580/YTS82ZII__39427.1618344470.jpg?c=1',
    user_id: 1
  },
  {
    title: 'Banjo for Sale',
    description: 'Epiphone MB-100 First Pick Banjo- New. Contact (000)000-000 for more info',
    image_url: 'https://static.turbosquid.com/Preview/2018/10/27__17_42_14/VintageBanjo3dsmodel000.jpg23109F93-ED2F-4EA2-90A0-DD15DCB8238FDefaultHQ.jpg',
    user_id: 2
  },
];

const seedInstruments = () => Post.bulkCreate(instrumentDetails);

module.exports = seedInstruments;