// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();



const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser () {

    return inquirer.prompt([



    ])


    .then()

    
    .catch(err) => {
        console.log(err)
    }
}