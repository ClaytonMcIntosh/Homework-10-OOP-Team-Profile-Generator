const inquirer = require("inquirer");

addManager();

function addManager() {}
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
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?",
    },
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
      {
        type: "list",
        name: "addMember",
        message: "Do you want to add any members to the manager's team?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((response) => {
      switch (response.addMember) {
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
        name: "internGitHub",
        message: "What is the intern's GitHub username?",
      },
      {
        type: "list",
        name: "addMember",
        message: "Do you want to add any members to the manager's team?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((response) => {
      switch (response.addMember) {
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

function finish() {
  console.log("Finish building team");
}
