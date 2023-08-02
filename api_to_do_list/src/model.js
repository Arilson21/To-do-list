const Sequelize = require('sequelize');
const database = require('./db');

const creteTable = async () => {
    await database.sync();
}



const ToDoList = database.define('list', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    status: {
        type: Sequelize.BOOLEAN
    }
});

creteTable();

module.exports = ToDoList;