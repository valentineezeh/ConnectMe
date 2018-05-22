import business from '../model/db';

const data = business;

class GetLocation {
    static location(req, res){
        const { location } = req.params;
        let newLocation = [];
        data.map((business) =>{
            if(location == business.location.city){
                newLocation.push(business);
            }
        })
        
       return res.status(200).send(newLocation);
    }
}
export default GetLocation;