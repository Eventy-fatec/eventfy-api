const { prisma } = require('../../lib/prisma');

async function createUsers(data) {
   await prisma.user.create({ data });
}

module.exports = { createUsers }
