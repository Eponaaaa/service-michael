const db = require('./db/index.js');
const path = require('path');
const fs = require('fs');

const IMG_PATH = path.join(__dirname, 'images');
const BASE_URL = 'https://hrr44fec.s3.us-east-2.amazonaws.com/';

//read the files names in the image directory
const imgFileNames = fs.readdirSync(IMG_PATH, (err, files) => {
  if (err) {
    throw new Error(console.log("couldn't read the files"));
  } else {
    return files;
  }
});

//create a test to make sure this generates a number that corresponds to the amount of images available in the array (0 through array.length-1)
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

//create 100 records with a loop
for (let i = 1; i <= imgFileNames.length; i++) {
  console.log(`${i}: ${BASE_URL}${imgFileNames[i-1]}`);
}
//use index to assign each records id, starting at 1
  // randomly assign up to 10 image urls in each
    //append base url with img name