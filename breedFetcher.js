const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search/?q=${process.argv[2]}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Please enter a valid breed');
  } else if (!data[0]) {
    console.log(data.message);
  } else {
    console.log(data[0].description);
  }
});
