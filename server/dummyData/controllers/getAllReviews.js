import business from '../model/db';

const data = business;

class GetAllReview {
  static allReview(req, res){
    const { businessId } =  req.params;
    data.map((business, key) =>{
      if(parseInt(businessId, 10) == business.id){
        return res.status(201).json({
          message: `Success! All reviews for business Id: ${business.id}.`,
            reviews: business.reviews
        })
    }
})
    res.status(404).json({
      message: 'Business does not exist..'
        })
    }
}
export default GetAllReview;