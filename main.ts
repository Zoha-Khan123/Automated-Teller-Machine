#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
import Choices from "inquirer/lib/objects/choices.js";


//=============================== Let Items Here ==============================================
let pin: number = 1234;
let balance: number = 100000;
let project = true
while (project) {


    //======================================= Making Password =================================================
    const resp = await inquirer.prompt([
        {
            name: 'pin',
            type: 'password',
            message: ("Enter your PIN")
        }
    ])
    if (resp.pin != pin) {
        console.log(chalk.redBright("You have enter wrong password"));
    }

    //======================================= Making Password End=================================================




    //======================================= Making Options =================================================

    else {
        let options = await inquirer.prompt([
            {
                type: "list",
                name: "choices",
                message: "Click any one of the one of them",
                choices: ["Withdraw", "Fastcash", "Balance Inquiry", "Exit"]
            }
        ])

        //======================================= Withdrawl Options =================================================
        if (options.choices === "Withdraw") {
            let Withdraw = await inquirer.prompt([
                {
                    type: "number",
                    name: "firstChoice",
                    message: "Enter the amount which you want to credit in your account.The amount should be the multiple of 500",
                }
            ])
            console.log(chalk.magentaBright("Transaction Successful"))
            balance = balance - (Withdraw.firstChoice)
            console.log(chalk.magentaBright("Your balance is RS: " + balance));
        }
        //======================================= Fastcash Options =================================================
        else if (options.choices === "Fastcash") {
            let Fastcash = await inquirer.prompt([
                {
                    type: "list",
                    name: "secondChoice",
                    message: "Click any one of the one of option which you want to credit your amount.The amount should be the multiple of 500",
                    choices: [500, 1000, 2000, 3000, 4000, 5000, 10000]
                }
            ])
            console.log(chalk.green("Transaction Successful"));
            balance = balance - (Fastcash.secondChoice);
            console.log(chalk.green("Your balance is RS " + balance));
        }

        //======================================= Balance Inquiry Options =================================================
        else if (options.choices === "Balance Inquiry") {
            console.log(chalk.yellow("Your balance is RS: " + balance))
        }
        else {
            break
        }
    }
}
console.log(chalk.yellow("\n\n===============================Thanks for using my application=========================="));


//=========================================== End Application ======================================================








