
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Instrument extends Model {}

// create fields/columns for User model
Instrument.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    instrument: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = Instrument;
