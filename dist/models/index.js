"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User"));
var Fav_1 = __importDefault(require("./Fav"));
Fav_1.default.belongsTo(User_1.default);
exports.default = { User: User_1.default, Fav: Fav_1.default };
