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
            name: "managerName",
            message: "Enter name of the Manager: "
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter ID of the the manager: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter email of the manager: "
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Enter office number of the manager: "
        },
        {
            type: "input",
            name: "1stEngName",
            message: "Enter name of the 1st engineer: "
        },
        {
            type: "input",
            name: "1stEngID",
            message: "Enter ID of the 1st engineer: "
        },
        {
            type: "input",
            name: "1stEngEmail",
            message: "Enter email of the 1st engineer: "
        },
        {
            type: "input",
            name: "1stEngGitHub",
            message: "Enter GitHub Username of the 1st engineer: "
        },
        {
            type: "input",
            name: "2ndEngName",
            message: "Enter name of the 2nd engineer: "
        },
        {
            type: "input",
            name: "2ndEngID",
            message: "Enter ID of the 2nd engineer: "
        },
        {
            type: "input",
            name: "2ndEngEmail",
            message: "Enter email of the 2nd engineer: "
        },
        {
            type: "input",
            name: "2ndEngGitHub",
            message: "Enter GitHub Username of the 2nd engineer: "
        },
  
        {
            type: "input",
            name: "3rdEngName",
            message: "Enter name of the 3rd engineer: "
        },
        {
            type: "input",
            name: "3rdEngID",
            message: "Enter ID of the 3rd engineer: "
        },
        {
            type: "input",
            name: "3rdEngEmail",
            message: "Enter email of the 3rd engineer: "
        },
        {
            type: "input",
            name: "3rdEngGitHub",
            message: "Enter GitHub Username of the 3rd engineer: "
        },
        
  
        {
            type: "input",
            name: "internName",
            message: "Enter name of the Intern: "
        },
        {
            type: "input",
            name: "internID",
            message: "Enter ID of the Intern: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter email of the Intern:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the school the intern studied at: "
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

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
