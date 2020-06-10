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
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]);
};

function nextEmployee() {
    promptAddNext().then(function (res) {
        if (res.promptAddNext === "Engineer") {
            promptEngineer().then(function (res) {
                const engineer = new Engineer(res.name, res.id, res.email, res.officeNumber)
                //data.push(engineer);
                nextEmployee();
            });
        };
        if (res.promptAddNext === "Intern") {
            promptIntern().then(function (res) {
                const intern = new Intern(res.name, res.id, res.email, res.officeNumber)
                //data.push(intern);
                nextEmployee();
            });
        } else {
            
        };
    });
};

promptManager().then(function (res) {
    const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    //data.push(manager);
    nextEmployee();
});

















// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML, including temp div for each employee!

//let data = [];
//render(data);//need to pass in the array of objects



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//fs write team.html in the output folder

