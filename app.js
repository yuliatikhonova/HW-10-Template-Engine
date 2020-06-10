const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
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
        },
        {
            type: "list",
            name: "Employee",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },

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
        },
        {
            type: "list",
            name: "Employee",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },
  
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
        },
        {
            type: "list",
            name: "Employee",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },
    ]);
  }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { return console.log(err); }
        console.log("You got it Girl or Boy!");
    });

}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", util(answers));
    })
}

init();
