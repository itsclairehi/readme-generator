// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  ## Description
  ## Installation
  ## Usage
  ## Contributing
  ## Tests
  ## License

  ## Questions? 
  [my github](github.com/${data.github})
  github.com/${data.github}
`;
}

module.exports = generateMarkdown;


