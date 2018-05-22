import db from '../models';
import bcrypt from 'bcrypt';

const User = db.User;

class SignUpController {
    static signUp(req, res){
        User.findOne({
            where: {
                email: req.body.email.trim().toLowerCase(),
                username: req.body.username.trim().toLowerCase()
            }
        }).then((existingUser) => {
            if (existingUser){
                return res.status(409).send({
                    status: 'Error',
                    message: 'User already exist '
                });
            }
        }).catch(error => {
            // console.log(error.message);
            res.status(400).json(error.message);
        });
        const hash = bcrypt.hashSync(req.body.password, parseInt(process.env.SALT));
        User
            .create({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email, 
                sex: req.body.sex, 
                username: req.body.username,
                password: hash,
                confirmPassword: req.body.confirmPassword,
                admin: false,
            })
            .then((user) => {
                return res.status(201).json({
                    user
                });
            })
            .catch(error => {
                // console.log(error);
                res.status(500).json(error.message);
            });
    }
      
}

export default SignUpController;