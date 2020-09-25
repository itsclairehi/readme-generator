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
        name: 'description',
        message: 'describe your project (Required)'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'provide installation instructions (Required)'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'provide usage info (Required)'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'provide contribution guidelines (Required)'
      },
      {
        type: 'list',
        name: 'license',
        message: 'which license do you have?',
        choices: ['one', 'two', 'three']
      },
      {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
      },


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

