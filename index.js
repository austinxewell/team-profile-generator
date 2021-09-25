const inquirer = require('inquirer');
const pageTemplate = require('./src/page_template')

pageTemplate.generateManager()


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
            name:'ManagerName',
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
    pageTemplate.generateManager()

}





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
                default:
                    generateHTML()
              }

        })
    }

init();