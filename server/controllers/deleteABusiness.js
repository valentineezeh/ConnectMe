import db from '../models';

const business = db.Business;

class DeleteABusiness{
    static deleteBusiness(req, res){
        business.findOne({
            where: {
                userId: req.decoded.userId,
                id: req.params.businessId
            }
        }).then( (businesses) => {
            if(req.userId != business.userId){
                return res.status(400).send({
                    error: 'You do not have the privilege to delete this Business',
                });
            }
            businesses
                .destroy()
                .then( res.status(200).send({
                    message: `Success! Business with Id Number ${businesses.id} has been deleted.`
                })).catch(error => {
                    // return console.log(error.message);
                    res.status(400).send(error);
                });
        })
            .catch((error) => {
                // return console.log(error.message);
                res.status(404).send({
                    message: 'Record not Found!',
                    error: error,
                });
            });
    }
}
export default DeleteABusiness;