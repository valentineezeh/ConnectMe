import db from '../models';

const business = db.Business;

class GetSingleBusiness{
    static getSingle(req, res){
        business
            .findById(req.params.businessId)
            .then(business => {
                if(business){
                    res.status(200).send({ business });
                }else{
                    res.status(404).send({
                        message: 'Record not found!'
                    });
                }
            }).catch(error => {
                // return console.log(error.message);
                res.status(400).send(error.message);
            });
    }
}
export default GetSingleBusiness;