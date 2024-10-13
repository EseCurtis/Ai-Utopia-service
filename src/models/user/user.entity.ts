import { BaseUser } from "@/constants/User";
import { Scales } from "@/dtos/Scales";
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
                    personality: userData.personality,
                    character: {
                        create: {
                            joy: userData.character.joy || Scales.MIN,
                            kindness: userData.character.kindness || Scales.MIN,
                            honesty: userData.character.honesty || Scales.MIN,
                            anger: userData.character.anger || Scales.MIN,
                            sadness: userData.character.sadness || Scales.MIN,
                            excitement: userData.character.excitement || Scales.MIN,
                            calmness: userData.character.calmness || Scales.MIN,
                            confidence: userData.character.confidence || Scales.MIN,
                            fear: userData.character.fear || Scales.MIN
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

    async getAll(): Promise<TUser[]> {
        const allUsers = await clientQuery(async () => {
            return await this.repo.findMany({
                include: {
                    character: true,
                },
            });
        });
        return allUsers;
    }
}
