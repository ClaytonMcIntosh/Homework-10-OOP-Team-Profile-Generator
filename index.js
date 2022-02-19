const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team member's employee ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team member's email address?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team member's office number?",
    },
    {
      type: "list",
      name: "managerTeam",
      message: "Do you want to add any members to the team?",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  ])
  .then((response) => {
    switch (response.managerTeam) {
      case "Engineer":
        console.log("Engineer Added");
        break;
      case "Intern":
        console.log("Intern Added");
        break;
      case "Finish building team":
        console.log("Finish building team Added");
        break;
    }
  });
