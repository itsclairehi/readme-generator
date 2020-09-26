// function to generate markdown for README
// const generateAbout = aboutText => {
//   if (!aboutText) {
//     return '';
//   }

//   return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//       <p>${aboutText}</p>
//     </section>
//   `;
// };

const screenshotUrl = (title, screenshot) => {
  if (!screenshot) {
    return '';
  }

  return `![${title}](${screenshot})`
}

const getBadge = (license) => {
  return `![badmath](https://img.shields.io/badge/license-${license}-green)`
}


function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage} ${screenshotUrl(data.screenshotTitle, data.screenshots)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## License
  ${getBadge(data.license)}

  ## Questions? 
  [my github](https://www.github.com/${data.github})

  Still more questions? Contact me at ${data.email}
`;
}

module.exports = generateMarkdown;


