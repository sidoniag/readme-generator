// required in order to use fs module
const fs = require('fs');

// link to page-template.js
const generatePage = require('./src/page-template.js');

// holds user command-line arguements
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract arguements and store them in distinct variables
const [name, github] = profileDataArgs;

// use fs.writeFile() function to create html
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});