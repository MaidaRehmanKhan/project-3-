#! /usr/bin/env node

import inquirer from "inquirer";

interface ansType{
    userId:string,
    userPin:number,
    accountType:string,
    amount:number,
}

const answers:ansType = await inquirer.prompt([
    {
        type:"input",
        name: "userId",
        message: "Kindly enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current","saving"],
        mssage: "Please Select Your Account Type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrwal"],
        message: "Select Your Transaction",
       when(answers) {
           return answers.accountType == "current";   
        }
    },
    {
        type: "number",
        name: "amount",
        choices: [1000, 2000, 3000, 20000],
        message: "Select Your Amount",
        when(answers){
            return answers.transactionType == "Fast Cast";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter The Withdrwal Amount:",
        when(answers){
            return answers.transactionType == "withdrawl"
        }
    }
]);
if(answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log("current balance");

const enteredAmount = answers.amount;
if(balance >= enteredAmount) {
    console.log("Insuficiant Balance");
}else {
    const remaining = balance - enteredAmount;
    console.log("Your Remaining Balance is",remaining);
}
    
}  
