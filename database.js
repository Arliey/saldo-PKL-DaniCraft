import { Sequelize } from 'sequelize';

const database = new Sequelize('saldo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  export default database