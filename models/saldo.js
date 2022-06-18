import { Sequelize, DataTypes } from 'sequelize';
import database from "../database.js";

const Saldo = database.define("Saldo", {
    keterangan : {
        type : DataTypes.STRING,
        allowNull : false
    },
    saldo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    tanggal : {
        type : DataTypes.DATE,
        allowNull : false
    },
    dekredit : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    }
} ,{freezeTableName: true})

export default Saldo