
// function to generate markdown for README
const generateMarkdown = data => {
  
    return `
    # ${data.project}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Testing](#testing)
    * [Questions](#questions)

    ## Installation
    ${data.install}

    ## Usage
    ${data.usage}

    ## License
    The project usesthe ${data.license} license.

    ## Contributing
    ${data.contribute}

    ## Testing
    ${data.test}

    ## Questions
    Visit my GitHub
    [${data.github}](https://github.com/${data.github})

    Additional questions, please send an email to me at:
    [${data.email}](mailto:${data.email})
    `;
  }
  
  module.exports = generateMarkdown;