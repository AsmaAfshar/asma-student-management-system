#! /usr/bin/env node
import inquirer from "inquirer";
console.log(">>>>>>>>>>>>>>>>Wellcome to student management system<<<<<<<<<<<<<<<<<<<")
// use math.floor for removing the points after digit and 10000 for taking 5 digits number
const randomNumber: number = Math.floor(10000 + Math.random() *90000)

let myBalance:number = 0;
let answer = await inquirer.prompt(
    [
        {
    name:  "students",
    type:  "input",
    message: "Enter student name", 
    validate: function (value){
        if(value.trim() !== ""){
            return true;
        }
        return "please enter a non-empty value"
      },
   },
   {
    name: "courses",
    type:  "list",
    message: "Select the course to enrolled",
    choices: ["MS Office","HTML","Javascrip","CSS", "Python"],
   }
 ]
);
const tutionFee: {[key: string]: number} = {   
    "MS Office": 1500,
    "HTML":     2500,
    "Javascrip": 3000,
    "CSS":       2000,
     "Python":   3500   
};
console.log(`\n Tution Feees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Current Balance: ${myBalance}\n`);

//payment method
let paymentType = await inquirer.prompt([{
    name:  "payment",
    type:  "list",
    message: "Select payment method",
    choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
},
{
    name: "amount",
    type: "input",
    message: "Transfer Money:",
    validate: function(value){
        if (value.trim() !== ""){
            return true;
        }
        return "Please rnter a non-empty value."
    },
}
]);
console.log(`\n you select payment method ${paymentType.payment}\n`);

const tutionFees =tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount) // convert the string into number and stored the payment amount

if(tutionFees === paymentAmount) {
    console.log(`Congratulations! You have successfully enrolled in ${answer.courses}.\n`);

let ans = await inquirer.prompt(
    [
      {
       name: "select",
       type:  "list",
       message: "What would you like to do next?",
       choices: ["View Status", "Exit"]
     }
])
if(ans.select === "View Status"){
    console.log("\n***********************status************************\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Tution Fees Paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
}else{
    console.log("\n Exiting Student Management System\n");
}
 
} else {
    console.log("Invalid amount due to course\n");
}



