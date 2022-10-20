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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("sequelize"), S = _a.S, DataTypes = _a.DataTypes, Model = _a.Model;
var db = require("../config/db");
var bcrypt = require("bcrypt");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.hashedPassword = function (password, salt) {
        return bcrypt.hash(password, salt);
    };
    User.prototype.validatePassword = function (password) {
        var _this = this;
        return this.hashedPassword(password, this.salt).then(function (newHash) { return newHash === _this.password; });
    };
    return User;
}(Model));
User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salt: {
        type: DataTypes.STRING,
    },
}, {
    sequelize: db,
    modelName: "user",
});
User.beforeCreate(function (user) {
    var salt = bcrypt.genSaltSync();
    user.salt = salt;
    return user.hashedPassword(user.password, user.salt).then(function (hash) {
        user.password = hash;
    });
});
exports.default = User;
