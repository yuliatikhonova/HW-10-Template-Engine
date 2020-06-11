const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamData = [];

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of the Manager: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID of the the manager: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email of the manager: "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter office number of the manager: "
        }
    ]);
};

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of the engineer: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID of the engineer: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email of the engineer: "
        },
        {
            type: "input",
            name: "github",
            message: "Enter GitHub Username of the engineer: "
        }
    ]);
};


function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of the Intern: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter ID of the Intern: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email of the Intern:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the school the intern studied at: "
        }
    ]);
};

function promptAddNext() {
    return inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
        }
    ]);
};

function nextEmployee() {
    promptAddNext().then(function (res) {
        if (res.addEmployee === 'Engineer') {
            promptEngineer().then(function (res) {
                const engineer = new Engineer(res.name, res.id, res.email, res.officeNumber);
                teamData.push(engineer);
                nextEmployee();
            });
        } else if (res.addEmployee === 'Intern') {
            promptIntern().then(function (res) {
                const intern = new Intern(res.name, res.id, res.email, res.officeNumber);
                teamData.push(intern);
                nextEmployee();
            });
        } else {
            //console.log('You are good to go!');
            var teamHtml = render(teamData);
            writeToFile(OUTPUT_DIR, outputPath, teamHtml);
        };
    });
};

promptManager().then(function (res) {
    const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    teamData.push(manager);
    nextEmployee();
});

function writeToFile(directory, fileName, data) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
          }
   fs.writeFile(fileName, data, function(err){
       if(err){
           return console.log(err);
           
       }
   });
};


