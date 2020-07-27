const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'Enter your project name. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description about the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
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
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?'
        }
    ]);
};    


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('ReadMe.md complete!');
    });
}

promptUser()
    .then(data => generateMarkdown(data))
    .then(markdown => writeToFile('./dist/README.md', markdown))
    .catch(err => console.log(err));