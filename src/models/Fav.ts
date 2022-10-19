const { S, DataTypes, Model } = require("sequelize");
import db from "../config/db";

class Fav extends Model {}
Fav.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "fav" }
);

export default Fav;
