const inquirer = require('inquirer');
const figlet = require('figlet');
const start = require('./controller/promptController');

figlet('Employee Summarizer', async (err, transformed) => {
    if (err) throw err;
        console.log(transformed);
    // await start.mainMenu();
});

