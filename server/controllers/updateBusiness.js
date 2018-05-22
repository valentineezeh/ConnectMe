import db from '../models';

const business = db.Business;

class UpdateBusiness{
    static updateBusiness(req, res){
        business.findOne({
            where: {
                id: req.params.businessId,
                userId: req.decoded.userId,
            }
        }).then(business => {
            if(!business){
                return res.status(404).send({
                    message: 'Business does not exist..'
                });
            }
            business.update({
                'name': req.body.name,
                'workingHours': req.body.workingHours,
                'category': req.body.category,
                'mobile': req.body.mobile,
                'email': req.body.email,
                'workingDays': req.body.workingDays,
                'services': req.body.services,
                'location.address': req.body.address,
                'location.city': req.body.city,
                'location.state': req.body.state,
                'location.country': req.body.country,
            })
                .then(modifyBusiness => res.status(200).send(modifyBusiness))
                .catch(error => {
                    // console.log(error.message);
                    res.status(500).send(error.message);});
        }).catch(error => {
            // console.log(error.message);
            res.status(500).send(error.message);});
    }
}
export default UpdateBusiness;
