const { prisma } = require('../../lib/prisma');

async function listUsers() {
  return prisma.user.findMany();
}

module.exports = { listUsers }
