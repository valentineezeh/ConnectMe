import chai from 'chai';
import supertest from "supertest";
import app from './app';

const {expect} = chai.expect;
const request = supertest(app);
let data = {};
let updateData = {};
let reviews = ['awesome service', 'great product']

describe('API Endpoints testing', () => {
    describe('Get all businesses in the application', () => {
        beforeEach(() => {
            data = {
                id: 1,
                name: "VGC",
                category: "entertainment",
                location: {
                    address: "no 4 vgc lagos",
                    country: "Nigeria",
                    state: "lagos",
                    city: "island"
                },
                mobile: "0902256789",
                email: "yahoo@yahoo.com",
                working_Hours: "8 - 5pm",
                working_Days: "mon - friday",
                services: "we the best ",
                reviews: []
            },
            {
                id: 2,
                name: "ABC",
                category: "ict",
                location: {
                    address: "no 5 ikd lagos",
                    country: "Nigeria",
                    state: "lagos",
                    city: "ikorodu"
                },
                mobile: "0902256755",
                email: "moimoi@yahoo.com",
                working_Hours: "8 - 5pm",
                working_Days: "mon - friday",
                services: "we are awesome ",
                reviews: []
            },
            {
                id: 3,
                name: "CDE",
                category: "catering",
                location: {
                    address: "no 8 cde lagos",
                    country: "Nigeria",
                    state: "lagos",
                    city: "Maryland"
                },
                mobile: "0802256745",
                email: "son@yahoo.com",
                working_Hours: "8 - 5pm",
                working_Days: "mon - friday",
                services: "we the greatness ",
                reviews: []
            },
            {
                id: 4,
                name: "FGH",
                category: "Photgrpaphy",
                location: {
                    address: "no 4 fgh lagos",
                    country: "Nigeria",
                    state: "lagos",
                    city: "ikeja"
                },
                mobile: "0702256657",
                email: "baba@yahoo.com",
                working_Hours: "8 - 5pm",
                working_Days: "mon - friday",
                services: "we the Bang ",
                reviews: []
            },
            {
                id: 5,
                name: "XYZ",
                category: "Building",
                location: {
                    address: "no 4 xyz lagos",
                    country: "Nigeria",
                    state: "lagos",
                    city: "Anthony"
                },
                mobile: "0702256744",
                email: "man@yahoo.com",
                working_Hours: "8 - 5pm",
                working_Days: "mon - friday",
                services: "we the Blues ",
                reviews: []
            }
            updateData = {
                name: "Emcee Enterprises",
                category: "IT Services",
                phone: "08074037215",
                email: 'u.ezeh@yahoo.com',
                working_Hours: "8 - 5pm",
                working_Days: "mon - friday",
                services: "we the Emcee ",
                reviews: ['awesome service', 'great satisfaction', 'best in the field']
            };
        });
        it('Should GET all the businesses in the application', ()=>{
            request.get('/api/v1/businesses')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res).to.be.an('object');
            });
        });
        it('Should CREATE a new business in the application', ()=>{
            request.post('/api/v1/businesses')
            .send(data)
            .end((err, res) =>{
                expect(res.status).to.equal(201);
                expect(res).to.be.an('object');
            });
        });
        it('Should UPDATE a business by the given id in the application', ()=>{
            request.put('/api/v1/businesses/:businessId')
            .send(data)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res).to.be.an('object');
            });
        });
        it('Should DELETE a business by the given id in the application', ()=> {
            request.delete('/api/v1/businesses/:businessId')
            .end((err, res) => {
                expect(res.status).to.equal(200);
            });
        });
        it('Should ADD a review to a business by the given id', () => {
            request.post('/api/v1/businesses/:businessId/reviews')
              .send(reviews)
              .end((err, res) => {
                expect(res.status).to.equal(201);
              });
          });
    })
})