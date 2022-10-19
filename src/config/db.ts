const Sequelize = require("sequelize");

const sequelize = new Sequelize("tmdb", null, "3097CHULAS", {
  host: "localhost",
  dialect: "postgres",
  password: "3097CHULAS"
});

export default sequelize;
