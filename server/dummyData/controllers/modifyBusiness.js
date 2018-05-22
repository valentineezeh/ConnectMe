import business from '../model/db';

const data = business;

class ModifyBusiness{
    static modifyBusiness(req, res){
        const { businessId } = req.params;
        data.map((business, key) =>{
            if(parseInt(businessId, 10) == business.id){
                business.name = req.body.name;
                business.category = req.body.category;
                business.location.address = req.body.address;
                business.location.country = req.body.country;
                business.location.city = req.body.city;
                business.location.state = req.body.state;
                business.working_Hours = req.body.working_Hours;
                business.working_Days = req.body.working_Days;
                business.services = req.body.services;
                business.mobile = req.body.mobile;
                business.email = req.body.email;
                return res.status(200).json({
                    message: `Success! Business id: ${business.id} has been updated.`,
                    business: business,
                })
            }
        });
        res.status(404).json({
            message: 'Business does not exist...'
        })
    }
}
export default ModifyBusiness;