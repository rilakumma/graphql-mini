const characters = require('./model');
const axios = require('axios');

module.exports={
    Query: {
        people: () => characters
    },
    Person: {
        homeworld(person){
            return axios.get(person.homeworld).then(res=> res.data);
        }
    }
}