import db from '../models';

const business = db.Business;

class PostBusinessController{
    static postBusiness(req, res){
        business.create({
            userId: req.decoded.userId,
            name: req.body.name.toLowerCase(),
            mobile: req.body.mobile,
            email: req.body.email, 
            location: {
                address: req.body.address.toLowerCase(),
                country: req.body.country.toLowerCase(),
                state: req.body.state.toLowerCase(),
                city: req.body.city.toLowerCase()
            },
            category: req.body.category.toLowerCase(),
            services: req.body.services,
            workingHours: req.body.workingHours,
            workingDays: req.body.workingDays,
        }).then(business => {
            return res.status(201).send({
                message: 'Success! Business has been created',
                business
            });
        }).catch( error => {
            return console.log(error.message);
            res.status(500).send(error);        
        });
    }
}
export default PostBusinessController;