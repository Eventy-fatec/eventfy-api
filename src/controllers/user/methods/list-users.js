import { prisma } from '../../../lib/prisma.js';

async function listUsers() {
  return prisma.user.findMany();
}

export { listUsers };
