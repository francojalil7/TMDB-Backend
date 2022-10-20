"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var sequelize = new Sequelize("tmdb", null, null, {
    host: "localhost",
    dialect: "postgres",
});
exports.default = sequelize;
