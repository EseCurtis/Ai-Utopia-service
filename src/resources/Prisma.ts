
import { PrismaClient } from '@prisma/client/edge'
export const prisma = new PrismaClient();


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
