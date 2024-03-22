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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AiSuggest_1 = require("../../controllers/AiSuggest");
const Survey_1 = require("../../controllers/Survey");
const user_entity_1 = require("../../models/user/user.entity");
const express_1 = __importDefault(require("express"));
// Create a new router instance
const survey = express_1.default.Router();
survey.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const _Survey = new Survey_1.Survey(payload, new AiSuggest_1.AiSuggest());
        const _User = new user_entity_1.UserEntity();
        const user = yield _Survey.getUser();
        _User.create(user)
            .then((status) => {
            console.info("STATUS::", status);
            res.ResponseFormat.success("Created user successfully.");
        })
            .catch((error) => {
            console.info("ERROR::", error);
            res.ResponseFormat.internalError("Unable to create user.");
        });
    }
    catch (error) {
        console.log("ERROR::", error);
        res.ResponseFormat.internalError("Internal server error.");
    }
}));
exports.default = survey;
//# sourceMappingURL=survey.route.js.map