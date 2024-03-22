"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./api/user.route"));
const content_route_1 = __importDefault(require("./api/content.route"));
const survey_route_1 = __importDefault(require("./api/survey.route"));
// Create a new router instance
const apiRouter = express_1.default.Router();
apiRouter.use("/user", user_route_1.default);
apiRouter.use("/content", content_route_1.default);
apiRouter.use("/survey", survey_route_1.default);
exports.default = apiRouter;
//# sourceMappingURL=api.js.map