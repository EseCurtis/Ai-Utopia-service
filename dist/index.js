"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Content_1 = require("@/constants/Content");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Default port is 3000 if PORT environment variable is not set
app.get('/', (req, res) => {
    res.status(200).json(Content_1.Content);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
