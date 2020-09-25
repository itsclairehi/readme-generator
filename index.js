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
        message: 'describe your project (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'provide installation instructions'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'provide usage info'
      },
      {
        type: 'confirm',
        name: 'confirmScreenshots',
        message: 'do you want to include screenshots?'
      },
      {
        type: 'input',
        name: 'screenshots',
        message: 'enter screenshot url or filepath',
        when: ({ confirmScreenshots }) => {
          if (confirmScreenshots) {
            return true
          } else {
            return false
          }
        }
      },
      {
      type: 'input',
        name: 'screenshotTitle',
        message: 'enter screenshot title',
        when: ({ confirmScreenshots }) => {
          if (confirmScreenshots) {
            return true
          } else {
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'provide contribution guidelines'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'provide instructions for tests'
      },
      {
        type: 'list',
        name: 'license',
        message: 'which license do you have?',
        choices: ['MIT', 'GNU', 'ISC', 'Apache license', 'other']
      },
      {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'what is your email?'
      },
    ])
}


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
  .then(answers => 
     generateMarkdown(answers)
  )
  .then(markdown => 
    writeToFile(markdown)
  )
  .catch(err => {
    console.log(err);
  });
}

// function call to initialize program
init()

