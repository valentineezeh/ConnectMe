import db from '../models';

const business = db.Business;
// console.log(db.Business)

class GetAllBusiness{
    static getAll(req, res){
        if(req.query.location == null && req.query.category == null){
            business
                .all()
                .then( business => {
                    // console.log(business);
                    res.status(200).send(business);
                })
                .catch( error =>{
                    // console.log(error.message);
                    return res.status(400).send(error.message);
                });
        }if (req.query.location !== null && req.query.category == null) {
            let newLocation = []; 
            // console.log(business) ; 
            // console.log(newLocation);         
            business.findAll(console.log(business), {
                where:{
                    userId: req.decoded.userId,
                    'location.city':  req.query.location,
                }
            }).then( businesses => {
                const {location} = req.query;
                // console.log(businesses); 
                // console.log(location);                
                businesses.filter(business => {
                    // console.log(business.location.city)
                    // console.log(location)
                    if (business.location.city == location){
                        // console.log(location);
                        newLocation.push(business);   
                    }
                });
                if (newLocation.length == 0){
                    return res.status(404).send({
                        message: 'Location is not Found'
                    });
                }else{
                    return res.status(200).send(newLocation);
                }  
            }).catch(error => {
                console.log(error);
                res.status(500).send(error.message);});
        }if(req.query.category !== null && req.query.location == null){
            
            business.findAll(console.log(business), {
                where: {
                    userId: req.decoded.userId,
                    category: req.query.category
                }
            }).then(businesses => {
                const {category} = req.query;
                let newCategory = [];
                // console.log(businesses)
                businesses.filter(business => {
                    // console.log(businesses[key].category)
                    // console.log(category)
                    if(business.category === category){
                        // console.log(businesses[key].category);
                        // console.log(category);
                        newCategory.push(business);
                    }
                }); 
                if (newCategory.length == 0){
                    return res.status(404).send({
                        message: 'Category is not Found'
                    }); 
                }else{
                    return res.status(200).send(newCategory); 
                }
                // return res.status(200).send(newCategory);
            }).catch( error => {
                console.log(error);
                return res.status(500).send(error.message);
            });
        }
       
    }
}
export default GetAllBusiness;