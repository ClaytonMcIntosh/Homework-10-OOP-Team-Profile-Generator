# Homework-10-OOP-Team-Profile-Generator

This week's homework involves creating html documents from data input by the user. This was done in node.js using the inquirer npm, as well as unit tested with the jest npm.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Video Walkthough:

This application is not deployed so here is a video walkthrough:

[Homework 10 - OOP - Team Profile Generator](https://youtu.be/CiFV0Zuy8RM)

## Screenshot of generated HTML

The following screenshot is of the html generated after running the application and responding to the prompts. You can view the sample here: [Sample index file](./dist/index.html)

![ScreenShot](./img/screenshot.png)
