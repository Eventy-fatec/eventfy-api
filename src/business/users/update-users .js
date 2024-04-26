const { prisma } = require('../../lib/prisma');

async function updateUsers(data) {
   await prisma.user.update({ data });
}

module.exports = { updateUsers }
