"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterValueForm = void 0;
const Scales_1 = require("../dtos/Scales");
const generateExample_1 = require("../helpers/generateExample");
exports.CharacterValueForm = {
    prompt: "only one value from these: (0 | 4 | 3 | 2 | 1), 4 being the highest and 0 being the lowest",
    example: (0, generateExample_1.generateExample)("4"),
    prototyper(value) {
        return (value && Number(value)) || Scales_1.Scales.MIN;
    }
};
//# sourceMappingURL=Character.former.js.map