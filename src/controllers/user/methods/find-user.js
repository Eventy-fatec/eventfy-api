import { prisma } from '../../../lib/prisma.js';

async function findUser(id) {
  return prisma.user.findUnique({ where: { id: Number(id) } });
}

export { findUser };
