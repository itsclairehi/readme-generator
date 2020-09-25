// array of questions for user
const fs = require('fs')
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = () => {
  return inquirer.prompt(
    [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your title!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'question',
        message: 'What is your purpose? (Required)'
      }
    ])
}


// questions()

// function to write README file
function writeToFile(data) {
  console.log("data?" + data);
  
  fs.writeFile(`./dist/README.md`, data, err => {
    if (err) {
      console.log(err)
    }
    console.log("success!");
    
  })
}

// function to initialize program
function init() {
  questions()
  .then(answers => {
    return generateMarkdown(answers)
  })
  .then(markdown => {
    return writeToFile(markdown)
  })
  .catch(err => {
    console.log(err);
  });

}

// function call to initialize program
init()

