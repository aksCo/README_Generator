const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generatemd = require("./utils/generateReadMe.js");
const licenceprompt = require('select-prompt');


// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'Title',
            message: 'Key in the Project Title: ',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Key in the Project Description: ',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Key in the instructions for installation: ',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Key in the usage information: ',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Key in the contribution guidelines: ',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Key in the test instructions: ',
        },

        {
            type: 'list',
            name: 'license',
            message: 'Choose a License for this project: ',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'If I have an issue, how can I contact you?'
        },
        {
            type: 'input',
            name: 'Username',
            message: 'Enter your GitHub username: '
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email: '
        }

    ]);
};




async function init() {
    try {
        const data = await promptUser();
        const generate = generatemd(data);
        await writeFileAsync('./results/README.md', generate);
        console.log("Success! README generated");

    } catch (err) {
        console.log(err);
    }
}




init();