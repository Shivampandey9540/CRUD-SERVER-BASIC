import { Sequelize } from "sequelize";
// import * as config from './config.json';

const sequelize = new Sequelize(
  "mydb",
  "root",
  "shivam",
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

export default sequelize;
