const inquirer = require("inquirer");
// const { connect } = require("../db/connection");
// const connection = require("../db/connection")

module.exports = {
    mainMenu: async function() {
        const { menuChoice } =  await inquirer.prompt({
            message: "Please select an employee class",
            type: "list",
            name: "employeeChoice",
            choices: ["Manager", 
            "Engineer", 
            "Intern", 
            "Exit"
        ],
        });

        console.log(menuChoice);

        switch (menuChoice) {
            case "Manager":
                managerClass();
                break;

            case "Intern":
                internClass();
                break;

            case "Engineer":
                engineerClass();
                break;
        }
    },

//Logic for Employee questions

    managerClass: async function () {
            const {name} = await inquirer.prompt ({
                type: "text",
                name: "name",
                message: "What is this employee's email?",
        });

    await connection.query("INSERT INTO department SET ?", [{ name }]);
    console.log("Success!!!");
    this.mainMenu();
}
}