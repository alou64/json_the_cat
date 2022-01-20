const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error) {
      data.length > 0 ? callback(null, data[0].description) : callback('Not a valid breed', null);
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
