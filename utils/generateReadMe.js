function generateReadme(data) {
    return `
    ${data.Title}
    [License](https://img.shields.io/badge/License-${data.License}-red.svg)

    #Description
    ${data.Description}

    #Table of Contents

    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Questions](#Questions)

    #Installation
    ${data.Installation}

    #Usage
    ${data.Usage}

    #License 

    [License](https://img.shields.io/badge/License-${data.License}-red.svg)

    #Contributing
    ${data.Contributing}
    ${data.Username}

    #Tests
    ${data.Tests}

    #Questions
    If you have questions, email me at: ${data.Email} `;

};

module.exports = generateReadme;