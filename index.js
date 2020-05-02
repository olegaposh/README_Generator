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
        message: "Please provide the usage of this Project.(How is it useful in the world?)"
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
        message: "What are the steps to test your Project?"
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
    .then(function (answers) {



        const queryURL = `https://api.github.com/users/${answers.username}`;

        axios
            .get(queryURL)
            .then(function (res) {

               


                answers["avatar_url"] = res.data.avatar_url;

                if (res.data.email === null) {

                    answers.email = "No email available"
                } else {
                    answers.email = res.data.email
                }
                //answers.avatar_url = es.data.avatar_url;

                let readme = gm.generateMarkdown(answers);

                writeFileAsync("README.md", readme)
                    .then(function () {

                        console.log("ReadME has been created!");
                    })
                    .catch(function (err) {

                        console.log(err);
                    })

            });


    })
    .catch(function (err) {

        console.log(err);
    })


