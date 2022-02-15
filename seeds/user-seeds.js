const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'ajsmith',
    email: 'banjolover23@email.com',
    password: 'password123'
  },
  {
    username: 'frankiej1',
    email: 'fjphnson87@email.com',
    password: 'password123'
  },
  {
    username: 'kaylewis66',
    email: 'kklewis09@email.com',
    password: 'password123'
  },
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
