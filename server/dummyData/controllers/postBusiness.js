import business from '../model/db';

const data = business;

class PostBusiness{
    static newBusiness(req, res){
        data.push({
            id: data.length + 1,
            name: req.body.name,
            category: req.body.category,
            location: {
                address: req.body.address,
                country: req.body.country,
                state: req.body.state,
                city: req.body.city,
            },
            mobile: req.body.mobile,
            email: req.body.email,
            working_Days: req.body.working_Days,
            working_Hours: req.body.working_Hours,
            services: req.body.services,
            reviews: []
        });
        res.status(201).json({
            message: `Success! Business has been created.`,
            business: data,
        })
    }
}
export default PostBusiness;