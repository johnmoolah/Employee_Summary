const inquirer = require("inquirer");
// const { connect } = require("../db/connection");
// const connection = require("../db/connection")

module.exports = {
    mainMenu: async function() {
        const { menuChoice } =  await inquirer.prompt({
            message: "Please select an employee",
            type: "list",
            name: "employeeChoice",
            choices: ["John Delizo", 
            "Fred Gilbert", 
            "Casey Stone", 
            "Ernest Hernandez",
            "Loren Herrera", 
            "Exit"
        ],
        });

        console.log(menuChoice);

        switch (menuChoice) {
            case "John Delizo":
                employeeJohnD();
                break;

            case "Fred Gilbert":
                employeeJohnD();
                break;

            case "Casey Stone":
                employeeJohnD();
                break;

            case "Ernest Hernandez":
                employeeJohnD();
                break;

            case "Loren Herrera":
                employeeJohnD();
                break;
        }
    },
}