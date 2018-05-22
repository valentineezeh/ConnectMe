import business from '../model/db';

const data = business;

class PostReview {
    static review(req, res){
        const { businessId } =  req.params;
        data.map((business, key) =>{
            if(parseInt(businessId, 10) == business.id){
                business.reviews.push(req.body.review);
                return res.status(201).json({
                    message: `Success! Your review for business Id: ${business.id} has been posted..`,
                    business
                })
            }
        })
        res.status(404).json({
            message: 'Business does not exist..'
        })
    }
}
export default PostReview;