const fs = require('fs')
const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
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

promptUser()

