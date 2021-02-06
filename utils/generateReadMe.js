function generateReadme(data) {
    return `
    <h1 align="center">${data.Title}</h1>
    ![badge](https://img.shields.io/badge/license-${data.license}-red) <br/>

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
    ![badge](https://img.shields.io/badge/license-${data.license}-red)<br/>
    This application is covered by : ${data.License} License.

    #Contributing
    ${data.Contributing}
    ${data.Username}

    #Tests
    ${data.Tests}

    #Questions
    If you have questions, email me at: ${data.Email} `;

};

module.exports = generateReadme;