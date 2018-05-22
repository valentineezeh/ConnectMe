import express from 'express';
import {AllBusiness, PostBusiness, ModifyBusiness, DeleteBusiness, PostReview, GetAllReview, GetLocation, GetCategory} from '../controllers';

const router = express.Router();

// defines routes
router.get('/', (req, res) => {
    res.send('hello, i am the app')
})

// routes for business
router.get ('/businesses', AllBusiness.getAllBusiness);
router.post ('/businesses', PostBusiness.newBusiness);
router.put ('/businesses/:businessId', ModifyBusiness.modifyBusiness);
router.delete ('/businesses/:businessId', DeleteBusiness.deleteBusiness);
router.post('/businesses/:businessId/reviews', PostReview.review);
router.get('/businesses/:businessId/reviews', GetAllReview.allReview);
router.get('/businesses/:location', GetLocation.location);
router.get('/business/:category', GetCategory.category);

// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
  }));
  
  router.post('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
  }));
  


export default router;