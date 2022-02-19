const inquirer = require("inquirer");
const fs = require("fs");

const teamArray = [];
const divs = [];
let html;

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function init() {
  addManager();
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
        //   validate: inserValidaterorFunctionhere!!!!!!
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((response) => {
      //add manager
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOfficeNumber
      );
      teamArray.push(manager);
      //run next function
      addTeamMember();
    });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "managerTeam",
        message: "Do you want to add any members to the manager's team?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((response) => {
      switch (response.managerTeam) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Finish building team":
          finish();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((response) => {
      //add engineer
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGitHub
      );
      teamArray.push(engineer);
      //run next function
      addTeamMember();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
      },
    ])

    .then((response) => {
      //add intern
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      teamArray.push(intern);
      //run next function
      addTeamMember();
    });
}

function createDivs() {
  for (i = 0; i < teamArray.length; i++) {
    let div = `<div style="background-color: lightblue">
          <div style="background-color: blue">${teamArray[i].name}</div>
          Id: N/A
          <br>
          Email: N/A
          <br>
          Office number: N/A
        </div>`;
    divs.push(div);
  }
}

function createHtml() {
  html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>My Team</h1>
        ${divs}
      </body>
    </html>`;
}

function finish() {
  createDivs();
  createHtml();
  writeHtml();
}

function writeHtml() {
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) {
      return console.log("Sorry, an ERROR occurred. Please try again.");
    }
    console.log("index.html created sucessfully!");
  });
}

init();
