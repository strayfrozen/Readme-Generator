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
      message: 'Please decribe your project in detail'  
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose you license',
        choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'CCO_1.0']
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?'
    },
    

]).then(function(answers) {
    fs.writeFile('README.md', markdown(answers), (err) => err ? console.log(err) : console.log('Your ReadMe file has been created!'))
})
