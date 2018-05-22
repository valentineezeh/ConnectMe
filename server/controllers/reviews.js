import db from '../models';

const Review = db.Review;
const User = db.User;
// const uuidParse = require('uuid-parse');

console.log(User);

class PostReviewController {
    static review(req, res){
        Review.create({
            userId: req.decoded.userId,
            businessId: req.params.businessId,
            fullName: req.body.fullname,
            title: req.body.title,
            review: req.body.review
        })
            .then( review => {
                // console.log(req.params.businessId);
                // console.log(uuidParse.unparse(req.params.businessId));
                res.status(201).send(review);})
            .catch( error => {
                console.log(error.message);
                res.status(500).send(error.message);
            });
                
            
        
    
    }
}
export default PostReviewController;