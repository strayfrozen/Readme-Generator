// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:
[Description](#Description)

[License](#License)

[Installation](#Installation)

[Usage](#Usage)

[Contributers](#contributers)

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


`;
}

module.exports = generateMarkdown;
