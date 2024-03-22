
import { Scales } from '@/dtos/Scales'
import { Ranks } from '@/dtos/user/Rank'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()


export const PrismaTest = () => {

    async function main() {
        await prisma.user.deleteMany({ where: { name: "Ese Curtis" }, })
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

        const allUsers = await prisma.character.findMany({
            include: {
                user: true, // Include the associated character in the response
            }
        })
        console.dir(allUsers, { depth: null })
    }




    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}

export const clientQuery = async (prismaQuery: () => Promise<any>) => {
    try {
        const result = await prismaQuery();
        await prisma.$disconnect();
        return result;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    }
};
