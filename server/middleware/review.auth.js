class ReviewValidation {
    static ReviewValidator(req, res, next){
        const error = [];
        if (req.body.fullname === undefined) {
            return res.status(400).send({
                msg: 'Full Name is required'
            });
        }
        if (req.body.title === undefined) {
            return res.status(400).send({
                msg: 'Title is required'
            });
        }
        if (req.body.review === undefined) {
            return res.status(400).send({
                msg: 'Review is required'
            });
        }
        if (req.body.fullname.toString().trim() === '') {
            error.push('Full Name is required...');
        }
        if (req.body.title.toString().trim() === '') {
            error.push('Title is required.');
        }
        if (req.body.review.toString().trim() === '') {
            error.push('Review is required.');
        }
        if (error.length > 0) {
            return res.status(400).send({
                msg: error
            });
        }
        return next();
    }
}
export default ReviewValidation;