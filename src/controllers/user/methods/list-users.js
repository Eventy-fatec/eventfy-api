import User from '../../../models/user.model.js'

async function listUsers() {
  return User.findMany();
}

export { listUsers };
