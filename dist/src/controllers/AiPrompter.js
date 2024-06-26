"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiPrompter = void 0;
const GeminiModel_1 = require("../resources/GeminiModel");
class AiPrompter {
    constructor() { }
    gen(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield GeminiModel_1.GeminiModel.generateContent(prompt);
            const response = yield result.response;
            return response.text();
        });
    }
}
exports.AiPrompter = AiPrompter;
//# sourceMappingURL=AiPrompter.js.map