"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./src/routes/api"));
const ResFormat_1 = __importDefault(require("./src/resources/ResFormat"));
const bindResponseFormat_1 = __importDefault(require("./src/middlewares/bindResponseFormat"));
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, bindResponseFormat_1.default)(ResFormat_1.default));
app.use("/api", api_1.default);
app.use((req, res) => {
    res.ResponseFormat.notFound("Nothing Found Here!");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map