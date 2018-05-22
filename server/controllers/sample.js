// const business = [
//     {
//         id: 1,
//         name: 'Emcee Enterprises',
//         location: [
//             {
//                 id: 1,
//                 locate: [],
//                 businesses: []
//             },
//             {
//                 id: 2,
//                 locate: [],
//                 businesses: []
//             },
             
              
//         ]    
//         ,
//         category: 'IT Services',
//         phone: '08074037215',
//         email: 'u.ezeh@yahoo.com',
//         reviews: []
//     },
//     {
//         id: 2,
//         name: 'Macuval Enterprises',
//         location: [
//             {
//                 id: 1,
//                 locate: [],
//                 businesses: []
//             },
//             {
//                 id: 2,
//                 locate: [],
//                 businesses: []
//             },
 
  
//         ]    
//         ,
//         category: 'Entertainment Services',
//         phone:'08074037215',
//         email: 'mac.val@yahoo.com',
//         reviews: []
//     },
//     {
//         id: 3,
//         name: 'Zulu Enterprises',
//         location: [
//             {
//                 id: 1,
//                 locate: [],
//                 businesses: []
//             },
//             {
//                 id: 2,
//                 locate: [],
//                 businesses: []
//             },
 
  
//         ]    
//         ,
//         category: 'IT Services',
//         phone: '08064039014',
//         email: 'zulu@yahoo.com',
//         reviews: []
//     },
// ];
// const newLocation = [];
// let key;
// let category = 'IT Services';

// const sample = () => {

//     for(key in business){
//         // console.log(business[key].category);
//         // console.log(category)
//         if (business[key].category === category){
//             newLocation.push(business[key]);
//         // return newLocation
//         }
//     }
//     if (newLocation.length == 0){
//         return 'Category is not Found';
//     }else{ 
//         return newLocation;
//     }
// };

// console.log(sample());

const reverseWord = (word) => {
    let wordList = word.split('');
    let newWord = wordList.reverse()
    let allWord = newWord.join('')
    console.log (allWord)
}
(reverseWord("toNsIytinutroppOtuBdetubirtsiDylnevEsIecnaillirB"))

// let number = [1,4,2,5,0,12,30,7,9,19,15]
// console.log(number.sort())