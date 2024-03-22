"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiModel = exports.genAI = void 0;
const dotenv_1 = require("dotenv");
const generative_ai_1 = require("@google/generative-ai");
(0, dotenv_1.configDotenv)();
exports.genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_APIKEY);
exports.GeminiModel = exports.genAI.getGenerativeModel({ model: "gemini-pro" });
//# sourceMappingURL=GeminiModel.js.map