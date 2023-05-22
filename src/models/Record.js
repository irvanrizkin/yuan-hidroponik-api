"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Record extends Model {}
  Record.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ppm: {
      type: Sequelize.INTEGER,
    },
    temperature: {
      type: Sequelize.DECIMAL,
    },
    source: {
      type: Sequelize.STRING,
    }
  }, {
    sequelize,
    modelName: 'records'
  });
  return Record;
};
