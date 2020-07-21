const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'project',
            message: 'Enter your project name'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description about the project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should the project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide description on how to contribute to your projects'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What comman should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?'
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