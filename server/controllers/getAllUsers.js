import db from '../models';

const User = db.User;
const Business = db.Business;
const Review = db.Review;

class getAllUsers {
    static allUser (req, res) {
        User.findAll({
            include: [
                {
                    model: Business,
                    as: 'business',
                    include: [
                        {
                            model: Review,
                            as: 'review'
                        }
                    ]
                }
            ]
        }).then(users => {
            const resObj = users.map(user => {
                // console.log(user)
                Object.assign(
                {},
                {
                    userId: user.id,
                    username: user.username,
                    business: user.Business.map( business => {
                        console.log(business)
                        Object.assign(
                        {},
                        {
                            businessId: business.id,
                            userId: business.userId,
                            businessName: business.businessName,
                            businessMobile: business.mobile,
                            businessEmail: business.email,
                            businessLocation: {
                                businessLocationAddress: business.location.address,
                                businessLocationCountry: business.location.country,
                                businessLocationState: business.location.state,
                                businessLocationCity: business.location.city
                            },
                            businessCategory: business.category,
                            businessServices: business.services,
                            businessWorkingHour: business.workingHours,
                            businessWorkingDays: business.workingDays,
                            reviews: business.Reviews.map(review => Object.assign(
                                {},
                                {
                                    reviewId: review.id,
                                    userId: review.userId,
                                    businessId: review.businessId,
                                    reviewTitle: review.title,
                                    reviewReview: review.review,
                                },
                            )),
                        }
                    )})
                } 
            )});
            return res.status(200).send({ resObj });
        }).catch( error => {
            return console.log(error);
            res.status(404).send(error);
        })
    }
}
export default getAllUsers;