"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const Scopes_1 = require("../dtos/content/Scopes");
const User_1 = require("./User");
exports.Content = {
    body: {
        text: "Test Post",
    },
    scope: Scopes_1.Scopes.POST,
    author: User_1.User
};
//# sourceMappingURL=Content.js.map