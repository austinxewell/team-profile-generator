const inquirer = require('inquirer');
const pageTemplate = require('./src/page_template')


// employee arrays
var managerArry = []
var engineerArry = []
var internArry = []

// creating managment
function manager() {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'managerName',
            message: "Please enter Manager's name.",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the Manager's employee ID.",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the Manager's email.",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Please enter the Manager's office number.",
            validate: managerOfficeNumberInput => {
                if (managerOfficeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's office number.");
                    return false;
                }
            }
        }],
    )
    .then(data => {
        managerArry.push(data)
        init()
    })

};

// creating Engineer










// creating Intern









// creating HTML
function generateHTML() {
    console.log(pageTemplate.generateManager(managerArry))
    pageTemplate.generateManager()
}




// prompt to start collecting information
const init = () => {
    inquirer
    .prompt(
        {
            type: 'list',
            name:'option',
            message: "Please choose an option",
            choices: [
                'Engineer',
                'Intern',
                'Manager',
                'Create Team'
            ],
        })
        .then(data => {
            switch (data.option) {
                case 'Engineer':
                // 
                    break;
                case 'Intern':
                // 
                    break;
                case 'Manager': 
                    manager()
                    break;
                case 'Create Team':
                    generateHTML()
                    break;
              }

        })
    }

// Create a function to write index.html
// function createHTML()
//     fs.writeFile('./dist/index.html', 'Hello content!', function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });


init();