// models/University.js
'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class University extends Model {
        static associate(models) {
            University.hasMany(models.Faculty);
        }
    }

    University.init(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        },
    },
    {
        sequelize,
        modelName: 'University',
    })
    return University;
};