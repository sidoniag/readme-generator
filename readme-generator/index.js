// use fs module
const fs = require('fs');

// link to generatemarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

fs.writeFile('readme.md', generateMarkdown(data), err => {
    if (err) throw err;

    console.log('ReadMe complete! Checkout ReadMe.md to see the output.');
});

// function to initialize program
function init() {

}

// function call to initialize program
init();