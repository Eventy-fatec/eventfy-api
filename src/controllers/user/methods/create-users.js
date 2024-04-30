import { validateUserMissingFields } from '../validations/user.validation.js';
import { prisma } from '../../../lib/prisma.js';

async function createUsers(data) {
  const missingFields = validateUserMissingFields(data);

  if (missingFields.length) {
    const itIsOrAre = missingFields.length > 0 ? 'are' : 'is';
    await `${missingFields.join(', ')} ${itIsOrAre} required`;
  }

  await prisma.user.create({ data });
}

export { createUsers };
