const inquirer = require('inquirer');
const pageTemplate = require('./src/page_template')
const fs = require('fs')


// employee arrays
var managerArry = []
var engineerArry = []
var internArry = []

// creating managment and initilazing team
const init = () => {
    const teamInfo = []
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
        },
        {
            type: 'list',
            name:'option',
            message: "What type of employee would you like to add to your team?",
            choices: [
                'Engineer',
                'Intern',
                'Create Team'
            ],
        }
    ])
        .then(data => {
            switch (data.option) {
                case 'Engineer':
                    engineer(teamInfo);
                    break;
                case 'Intern':
                    intern(teamInfo);
                    break;
                case 'Create Team':
                    finalizeTeam(teamInfo)
              }

        })
    }

// create engineer

const engineer = (teamInfo) => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's id:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's id number");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's GitHub username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Select a team member to add:',
            choices: [
                'Engineer',
                'Intern',
                "I'm done adding team members"
            ]
        }
    ]).then(engineerData => {
        const { addTeamMember } = engineerData;
        const engineer = new Engineer(engineerData);

        teamData.push(engineer);

        switch (addTeamMember) {
            case 'Engineer':
                engineer(teamInfo);
                break;
            case 'Intern':
                intern(teamInfo);
                break;
            case 'Create Team':
                finalizeTeam(teamInfo)
        }
    })
}



init();