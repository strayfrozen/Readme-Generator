// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:
[Description](#description)

[License](#license)

[Installation](#installation)

[Usage](#usage)

[Contributers](#contributers)

[Tests](#tests)

[Questions](#questions)

## Description
${data.description}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})


## Installation
${data.installation}

## Usage
${data.usage}

## Contributers
${data.contributers}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
