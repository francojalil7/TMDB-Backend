const Sequelize = require("sequelize");

const sequelize = new Sequelize("tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: true,
});

export default sequelize;
