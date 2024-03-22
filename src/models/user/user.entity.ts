import { Scales } from "@/dtos/Scales";
import { Ranks } from "@/dtos/user/Rank";
import { clientQuery, prisma } from "@/resources/Prisma"
import { TUser } from "@/types/TUser";

export class UserEntity {
    repo = prisma.user;
    constructor() { }

    async create(userData: TUser): Promise<any> {
        const createQuery = await clientQuery(async () => {
            return await this.repo.create({
                data: {
                    name: userData.name,
                    rank: userData.rank,
                    character: {
                        create: {
                           ...userData.character,
                        }
                    },
                    thoughts: userData.thoughts,
                    abstracts: userData.abstracts
                },
                include: {
                    character: true,
                },
            })
        })

        return (createQuery)
    }
}