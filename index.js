// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

// avatar_url


const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const gm = require("./utils/generate.Markdown");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);




inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "what is the Project Title?"
    },
    {
        type: "input",
        name: "description",
        message: "In a few sentences provide a description"
    },
    {
        type: "input",
        name: "installation",
        message: "what are the steps to install?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the usage of this Project.(How is it useful in the world?"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the name of the license"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list the contributors of this Project"
    },
    {
        type: "input",
        name: "test",
        message: "what are the steps to install?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your Github username:"
    }
])
    .then(function (answers, username) {

        let readme = gm.generateMarkdown(answers)

        const queryURL = `https://api.github.com/users/${username}`;

        axios
            .get(queryURL)
            .then(function (res) {

                console.log(res.data);
                console.log("success");



            });





        writeFileAsync("README.md", readme)
            .then(function () {

                console.log("hello u did it?!");
            })
            .catch(function (err) {

                console.log(err);
            })
    })
    .catch(function (err) {

        console.log(err);
    })


