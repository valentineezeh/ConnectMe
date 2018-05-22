import business from '../model/db';

const data = business;

class AllBusiness{
    static getAllBusiness(req, res){
        res.status(200).json({
            error: false,
            businesses: data,
        })       
    };
}

export default AllBusiness;