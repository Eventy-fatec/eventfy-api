import { createUsers } from './methods/create-users.js';
import { findUser } from './methods/find-user.js';
import { listUsers } from './methods/list-users.js';
import { updateUsers } from './methods/update-users.js';

export default class UserController {
  static async get(req, res) {
    const users = await listUsers();
    res.json(users);
  }

  static async find(req, res) {
    if (req.params.id) {
      const user = await findUser(req.params.id);
      res.json(user);
    } else {
      res.status(400).json({ error: 'ID is required' });
    }
  }

  static async post(req, res) {
    const user = await createUsers(req.body);
    if (typeof user === 'string') {
      return res.status(400).json({ error: user });
    }
    return res.json(user);
  }

  static async put(req, res) {
    const user = await updateUsers(req.body);
    if (typeof user === 'string') {
      return res.status(400).json({ error: user });
    }
    return res.json(user);
  }

  static async delete(req, res){
    
  }
}
