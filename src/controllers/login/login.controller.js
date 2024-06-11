import { validationResult } from 'express-validator';
import User from '../../models/user.model.js';

export default class LoginController {
    static async post(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const user = await User.findUnique({
            where: {
                cpf: req.params.cpf,
                password: req.params.password
            }
        });
        if (!user){
            return res.status(404).json({ message: 'Usuário não encontrado'});
        }
        if (!user.cpf){
            return res.status(403).json({ message: 'Usuário ou senha incorretos'});
        }
        if (!user.password){
            return res.status(403).json({ message: 'Usuário ou senha incorretos'});
        }
        return res.json(user);
    }
}