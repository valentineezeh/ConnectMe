import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import db from '../models';

dotenv.config();

const secret = process.env.SECRET_KEY;
const User = db.User;

class SignInController {
    static signIn(req, res){
        if(!req.body.email || req.body.email.trim().length === 0){
            return res.status(400).json({
                message: 'Email Field should not be empty'
            });
        }if(!req.body.password || req.body.password.trim().length === 0){
            return res.status(400).json({
                message: 'Password Field Should not be empty'
            });
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(!user){
                return res.status(404).send({
                    success: false,
                    message: 'Authentication failed. User not found.'
                });
            }else if (user){
                if (user.password !== req.body.password){
                    res.status(400).json({
                        success: false,
                        message: 'Authentication failed, Wrong Password.'
                    });
                }else{
                    bcrypt.compare(req.body.password, user.password, (err, response) => {
                        if(err){
                            return res.status(500).send({
                                error: err.message
                            });
                        }else{
                            const token = jwt.sign({
                                username: user.username,
                                userId: user.id,
                            }, secret, {expiresIn: 1440});
                            return res.status(200).send({
                                success: true,
                                message: `Welcome ${user.firstName} ${user.lastName} to vConnect`,
                                token,
                            });
                        }
                    });
                }
            }  
        }).catch(error => {
            // console.log(error.message);
            return res.status(500).send({
                error: `An error occoured: ${error.message}`
            });
        });
    }
}

export default SignInController;