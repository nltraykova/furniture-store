import { prisma } from "../lib/prisma";

async function getAll(filter = {}) {
    const resut = await prisma.furniture.findMany({
        where: filter,
        select: {
            id: true,
            description: true,
            img: true,
            price: true
        }
    });

    return resut.map(furniture => ({ ...furniture, _id: furniture.id }));
}

async function getById(furnirureId) {
    const result = await prisma.furniture.findUnique({
        where: {
            id: furnirureId
        }
    });

    return result ? { ...result, _id: result.id, _ownerId: result.userId } : null
}

function create(furnitureData, userId) {
    return prisma.furniture.create({
        data: {
            ...furnitureData,
            userId: userId
        }
    });
}

function update(furnirureId, userId, furnitureData) {
    return prisma.furniture.update({
        where: {
            id: furnirureId,
            userId
        },
        data: furnitureData
    });
}

function remove(furnirureId, userId) {
    return prisma.furniture.delete({
        where: {
            id: furnirureId,
            userId
        }
    });
}

const furnitureService = {
    getAll,
    getById,
    create,
    update,
    remove
};

export default furnitureService;