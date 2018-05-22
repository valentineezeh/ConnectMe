import express from 'express';
import { SignUpController, SignInController, PostBusinessController, GetAllBusiness, GetSingleBusiness, DeleteABusiness, UpdateBusiness, PostReviewController, getAllUsers } from '../controllers/index';
import { Auth, signUpValidation, signInValidation, businessValidation, ReviewValidation } from '../middleware/index';

const router = express.Router();

// defines routes
router.get('/', (req, res) => {
    res.send('hello, i am the app');
});

// Valid routes
router.post('/users/signup', signUpValidation.signUp, SignUpController.signUp);
router.post('/users/signin', signInValidation.signIn, SignInController.signIn);
router.post('/businesses', Auth.verify, businessValidation.businessValidator, PostBusinessController.postBusiness);
router.post('/businesses/:businessId/reviews', Auth.verify, ReviewValidation.ReviewValidator, PostReviewController.review);
router.get('/businesses', Auth.verify, GetAllBusiness.getAll);
//=====================================================================================================================================
router.get('/users', Auth.verify, getAllUsers.allUser);
router.get('/businesses/:businessId', Auth.verify, GetSingleBusiness.getSingle);
router.delete('/businesses/:businessId', Auth.verify, DeleteABusiness.deleteBusiness);
router.put('/businesses/:businessId', Auth.verify, businessValidation.businessValidator, UpdateBusiness.updateBusiness);



// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));
  
router.post('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));
  


export default router;