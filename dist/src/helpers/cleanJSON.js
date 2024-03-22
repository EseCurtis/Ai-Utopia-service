"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanJSON = void 0;
const jsonrepair_1 = __importDefault(require("jsonrepair"));
const cleanJSON = (dirtyJSON) => {
    // Remove markdown formatting
    const cleanedJSON = dirtyJSON.replace(/```json/g, '').replace(/`/g, '');
    // Fix decimals that don't start with zero
    let fixedJSON = cleanedJSON.replace(/:\s*\.(\d+)/g, ': 0.$1');
    try {
        //@ts-ignore
        fixedJSON = (0, jsonrepair_1.default)(cleanedJSON);
    }
    catch (error) {
    }
    return fixedJSON;
};
exports.cleanJSON = cleanJSON;
//# sourceMappingURL=cleanJSON.js.map