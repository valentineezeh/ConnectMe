class businessValidation {
    static businessValidator(req, res, next) {
        const error = [];
        if (req.body.name === undefined) {
            return res.status(400).send({
                msg: 'Name is required'
            });
        }
        if (req.body.mobile === undefined) {
            return res.status(400).send({
                msg: 'Mobile is required'
            });
        }
        if (req.body.email === undefined) {
            return res.status(400).send({
                msg: 'Email is required'
            });
        }
        if (req.body.city === undefined) {
            return res.status(400).send({
                msg: 'city is required..'
            });
        }
        if (req.body.state === undefined) {
            return res.status(400).send({
                msg: 'state is required'
            });
        }
        if (req.body.country === undefined) {
            return res.status(400).send({
                msg: 'Country is required'
            });
        }
        if (req.body.address === undefined) {
            return res.status(400).send({
                msg: 'Address is required'
            });
        }
        if (req.body.category === undefined) {
            return res.status(400).send({
                msg: 'Category is required'
            });
        }
        if (req.body.services === undefined) {
            return res.status(400).send({
                msg: 'Services is required'
            });
        }
        if (req.body.workingHours === undefined) {
            return res.status(400).send({
                msg: 'Working Hours is required'
            });
        }
        if (req.body.workingDays === undefined) {
            return res.status(400).send({
                msg: 'Working Days is required'
            });
        }
        if (req.body.name.toString().trim() === '') {
            error.push('Name is required...');
        }
        if (req.body.mobile.toString().trim() === '') {
            error.push('Mobile is required.');
        }
        if (req.body.email.toString().trim() === '') {
            error.push('Email is required.');
        }
        if (req.body.city.toString().trim() === '') {
            error.push('City is required...');
        }
        if (req.body.state.toString().trim() === '') {
            error.push('State is required...');
        }
        if (req.body.address.toString().trim() === '') {
            error.push('Address is required...');
        }
        if (req.body.country.toString().trim() === '') {
            error.push('Country is required...');
        }
        if (req.body.category.toString().trim() === '') {
            error.push('Category is required...');
        }
        if (req.body.services.toString().trim() === '') {
            error.push('Sservices is required...');
        }
        if (req.body.workingHours.toString().trim() === '') {
            error.push('Working Hours is required...');
        }
        if (req.body.workingDays.toString().trim() === '') {
            error.push('Working Days is required...');
        }
        if (error.length > 0) {
            return res.status(400).send({
                msg: error
            });
        }
        return next();
    }
}

export default businessValidation;
