"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./config/db"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use('/api', routes_1.default);
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.use(function (err, req, res, next) {
    console.error;
    res.status(500).send(err);
});
db_1.default.sync({ force: false }).then(function () {
    console.log("DB CONECTADA");
    app.listen(0, function () { return console.log("server listenning"); });
});
