const fs = require('fs');
// require inquire

const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('readme.md', generateMarkdown(fileName, data), err => {
        if (err) throw err;

        console.log('ReadMe.md complete!');
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();