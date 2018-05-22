import business from '../model/db';

const data = business;

class GetCategory {
    static category(req, res){
        console.log("mememe")
        const { category } = req.params;
        let newCategory = [];
       data.map((business) => {
           if(category == business.category){
               newCategory.push(business);
           }
       })
       return res.status(200).send(newCategory);
    }
}
export default GetCategory;