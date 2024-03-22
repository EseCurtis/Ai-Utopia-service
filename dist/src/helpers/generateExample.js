"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExample = void 0;
const generateExample = (value) => {
    return `
    {
        "status": 200,
        "accuracy": percentage,
        "value": ${value}
    }
    `;
};
exports.generateExample = generateExample;
//# sourceMappingURL=generateExample.js.map