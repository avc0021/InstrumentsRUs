const { Instruments } = require('../models');

const instrumentdata = [
    {
        instrument: 'Banjo',
        brand_name: 'Gold Tone',
        price: '879'
    },

    {
        instrument: 'Bass',
        brand_name: 'Fender',
        price: '689'
    },

    {
        instrument: 'Keyboard',
        brand_name: 'Casio',
        price: '199'
    },

    
];

const seedInstruments = () => Instruments.bulkCreate(instrumentdata);

module.exports = seedInstruments;