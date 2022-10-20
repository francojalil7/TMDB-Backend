"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("sequelize"), S = _a.S, DataTypes = _a.DataTypes, Model = _a.Model;
var db_1 = __importDefault(require("../config/db"));
var Fav = /** @class */ (function (_super) {
    __extends(Fav, _super);
    function Fav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fav;
}(Model));
Fav.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    poster: {
        type: DataTypes.STRING,
    },
}, { sequelize: db_1.default, modelName: "fav" });
exports.default = Fav;
