import { prisma } from "../lib/prisma.js";

function register(userData) {
    return prisma.user.create({
        data: userData
    });
}

const userService = {
    register,
};

export default userService;