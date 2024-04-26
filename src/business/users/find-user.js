const { prisma } = require('../../lib/prisma');

async function findUser(id) {
  return prisma.user.findUnique({ where: { id: Number(id) } });
}

module.exports = { findUser }
