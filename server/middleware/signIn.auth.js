import validator from 'validator';

class signInValidation{
    static signIn(req, res, next){
        const errors = [];      
        if (req.body.email == ''){
            errors.push('Email should not be empty');
            return res.status(400).send({
                status: 'Error',
                msg: errors
            })
        }
        if (!validator.isEmail(req.body.email.toString())){
            errors.push('Email must be valid..');
            return res.status(400).send({
                status: 'Error',
                msg: errors
            })
        }
        if (req.body.email == undefined){
            errors.push('Email is required..')
            return res.status(400).send({
                status: 'Error',
                msg: errors
            })
        }
        if ( req.body.password == undefined){
            errors.push('Password is required...')
            return res.status(400).send({
                status: 'Error',
                msg: errors
            })
        }
        if ( req.body.password == ''){
            errors.push('Password should not be empty.');
            return res.status(400).send({
                status: 'Error',
                msg: errors
            });
        }
        return next();
    }
}
export default signInValidation;