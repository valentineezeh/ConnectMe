import business from '../model/db';

const data = business;

class DeleteBusiness{
    static deleteBusiness(req, res){
      const { businessId } = req.params;
      data.map((business, key) =>{
         if (parseInt(businessId, 10) == business.id){
             data.splice(key, 1);
             return res.status(200).json({
                 message: `Success! Business with business id: ${business.id} has been deleted.`,
                 business: data,
             });
         } 
      });
      res.status(404).json({
          message: `Business does not exist..`
      })
    }
}
export default DeleteBusiness;