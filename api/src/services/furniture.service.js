import { prisma } from "../lib/prisma";

async function getAll() {
    const resut = await prisma.furniture.findMany({
        select: {
            id: true,
            description: true,
            img: true,
            price: true
        }
    });

    return resut.map(furniture => ({...furniture, _id: furniture.id}));
}

async function getById(furnirureId) {
    const result = await prisma.furniture.findUnique({
        where: {
            id: furnirureId
        }
    });

    return result ? { ...result, _id: result.id } : null
}

function create(furnitureData) {
    return prisma.furniture.create({
        data: furnitureData
    });
};

const furnitureService = {
    getAll,
    getById,
    create,
};

export default furnitureService;