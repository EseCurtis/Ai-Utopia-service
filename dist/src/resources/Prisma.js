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
exports.clientQuery = exports.PrismaTest = exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
const PrismaTest = () => {
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.prisma.user.deleteMany({ where: { name: "Ese Curtis" }, });
            // await prisma.user.create({
            //     data: {
            //         name: "Ese Curtis",
            //         rank: Ranks.KING,
            //         character: {
            //             create: {
            //                 joy: Scales.MAX,
            //                 anger: Scales.MID,
            //                 sadness: Scales.SUBMAX,
            //                 excitement: Scales.SUBMIN,
            //                 calmness: Scales.SUBMIN,
            //                 confidence: Scales.MID,
            //                 fear: Scales.SUBMAX,
            //                 kindness: Scales.SUBMIN,
            //                 honesty: Scales.MAX,
            //             }
            //         },
            //         thoughts: ["RIches", "Growth", "Matter", "Food", "Piped Out"]
            //     },
            //     include: {
            //         character: true, // Include the associated character in the response
            //     },
            // })
            const allUsers = yield exports.prisma.character.findMany({
                include: {
                    user: true, // Include the associated character in the response
                }
            });
            console.dir(allUsers, { depth: null });
        });
    }
    main()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield exports.prisma.$disconnect();
    }))
        .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
        console.error(e);
        yield exports.prisma.$disconnect();
        process.exit(1);
    }));
};
exports.PrismaTest = PrismaTest;
const clientQuery = (prismaQuery) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaQuery();
        yield exports.prisma.$disconnect();
        return result;
    }
    catch (e) {
        console.error(e);
        yield exports.prisma.$disconnect();
        process.exit(1);
    }
});
exports.clientQuery = clientQuery;
//# sourceMappingURL=Prisma.js.map