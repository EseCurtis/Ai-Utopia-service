"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Content_1 = require("../../constants/Content");
const express_1 = __importDefault(require("express"));
// Create a new router instance
const contentRouter = express_1.default.Router();
contentRouter.get("/", (req, res) => {
    res.status(200).json(Content_1.Content);
});
exports.default = contentRouter;
//# sourceMappingURL=content.route.js.map