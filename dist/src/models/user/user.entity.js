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
exports.UserEntity = void 0;
const Prisma_1 = require("../../resources/Prisma");
class UserEntity {
    constructor() {
        this.repo = Prisma_1.prisma.user;
    }
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const createQuery = yield (0, Prisma_1.clientQuery)(() => __awaiter(this, void 0, void 0, function* () {
                return yield this.repo.create({
                    data: {
                        name: userData.name,
                        rank: userData.rank,
                        character: {
                            create: Object.assign({}, userData.character)
                        },
                        thoughts: userData.thoughts,
                        abstracts: userData.abstracts
                    },
                    include: {
                        character: true,
                    },
                });
            }));
            return (createQuery);
        });
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map