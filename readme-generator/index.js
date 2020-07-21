const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            }
        ]);
    };    
    promptUser().then(answers => console.log(answers));

// ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw (err);
        console.log('ReadMe.md complete!');
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();