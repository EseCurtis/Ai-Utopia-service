"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThougthsValueForm = void 0;
const generateExample_1 = require("../helpers/generateExample");
exports.ThougthsValueForm = {
    prompt: `only a json array of 4 probable single word thoughts to describe ones persona`,
    example: (0, generateExample_1.generateExample)(`["Cheerful", "Giver", "Dancer", "Food"]`),
    prototyper(value) {
        return (value && Array.from(value)) || [];
    }
};
//# sourceMappingURL=Thoughts.former.js.map