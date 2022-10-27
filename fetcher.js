const request = require('request');
const fs = require('fs');

let answers = process.argv;
answers.splice(0,2);
let website = answers[0];
let localPath = answers[1];

request(website, (error, response, body) => {
  fs.writeFile(localPath, body, () => {
    console.log(`Downloaded and saved ${body.split('').length} bytes to ${localPath}`)
  });

});
