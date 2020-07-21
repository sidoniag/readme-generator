// required in order to use fs module
const fs = require('fs');

// use inquirer
const inquirer = require('inquirer');

// link to page-template.js
const generatePage = require('./src/page-template.js');

// holds user command-line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract arguments and store them in distinct variables
const [name, github] = profileDataArgs;

// // use fs.writeFile() function to create html
// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// questions
const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};    

const promptProject = portfolioData => {
         // if there's no 'projects' array property, create one    
         if (!portfolioData.projects) {
            portfolioData.projects = [];
        };
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
      .then(projectData => {
          portfolioData.projects.push(projectData);
          if (projectData.confirmAddProject) {
              return promptProject(portfolioData);
          } else {
              return portfolioData;
          }
      });
  };
 

  promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });