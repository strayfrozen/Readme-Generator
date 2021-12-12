const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please decribe your project in detail.'  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please decribe your installation process.'  
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'  
      },
      {
        type: 'input',
        name: 'contributers',
        message: 'Provide the contributers on this project.'  
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide info on how to run tests on your project.'  
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide your github user name.'  
      },
    {
        type: 'list',
        name: 'license',
        message: 'Choose you license',
        choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'CCO_1.0']
    }
    
    

]).then(function(answers) {
    fs.writeFile('SampleREADME.md', markdown(answers), (err) => err ? console.log(err) : console.log('Your ReadMe file has been created!'))
})
