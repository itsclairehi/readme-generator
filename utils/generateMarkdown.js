// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}

  ## Questions? 
  [my github](https://www.github.com/${data.github})
  Still more questions? Contact me at ${data.email}
`;
}

module.exports = generateMarkdown;


