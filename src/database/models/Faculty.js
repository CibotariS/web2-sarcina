// models/Faculty.js
'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Faculty extends Model {
        static associate(models) {
            Faculty.belongsTo(models.University);
        }
    }

Faculty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Faculty',
  });


 return Faculty;
};