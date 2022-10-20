"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var SECRET = process.env.SECRET;
var genToken = function (payload) {
    var token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
    return token;
};
var valToken = function (token) {
    return jwt.verify(token, SECRET);
};
exports.default = { genToken: genToken, valToken: valToken };
