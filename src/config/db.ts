const Sequelize = require("sequelize");

const sequelize = new Sequelize("tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
