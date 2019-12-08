console.log(".. Executing Employee Manager")
const inquirer = require("inquirer");


const fs = require("fs");
const Employee = require('./employee')
const Engineer = require('./engineer')
const Intern = require('./intern')
const Manager = require('./manager')
const makeHTML = require('./finalHTML');
//name id email git user
let htmlTemp;
fs.readFile("./templates/mainTemp.html",'utf8', (err, data)=>{htmlTemp = data;})


let numEmployees = 0;
let employees = [{}];
let htmlArr = [{}];


const prompts = require('prompts');
prompts.override(require('yargs').argv);
(async () => {
    let finalResponse;
    const response = await prompts([
        {
            type: 'number',
            name: 'numberOfEmployees',
            message: 'How many employees do you have?'

        }
    ]);
    numEmployees = parseInt(response.numberOfEmployees);
    

    for (let i = 0; i < numEmployees; i++) {
        console.log(`------------------------------------- \nPlease input the data for Employee ${i+1} \n ------------------------------------`)
        const empResponse = await prompts([
            {
                type: 'text',
                name: 'name',
                message: 'What is employee\'s name?'

            }, {
                type: 'number',
                name: 'id',
                message: 'What is the employee\'s ID?'

            }, {
                type: 'text',
                name: 'email',
                message: 'What is the employee\'s Email?'

            }, {
                type: 'select',
                name: 'job',
                message: 'What is their Job title?',
                choices: [{ title: "Engineer", value: "Engineer" }, { title: "Intern", value: "Intern" }, { title: "Manager", value: "Manager" }]

            }
        ]);
        employees[i] = empResponse;
        //console.log(empResponse.job);
        
        if (empResponse.job === "Engineer") {
            const engResponse = await prompts([
                {
                    type: 'text',
                    name: 'github',
                    message: 'What is employee\'s github user?'

                }
            ]);
            employees[i].github = engResponse.github;
        }

        if (empResponse.job === "Intern") {
            const intResponse = await prompts([
                {
                    type: 'text',
                    name: 'school',
                    message: 'What School does this employee attend?'

                }
            ]);
            employees[i].school = intResponse.school;
        }

        if (empResponse.job === "Manager") {
            const manResponse = await prompts([
                {
                    type: 'number',
                    name: 'officeNumber',
                    message: 'What is the Manager\'s office number?'

                }
            ]);
            employees[i].officeNumber = manResponse.officeNumber;
        }

    }

    console.log(employees)
    
for (let i = 0; i < employees.length; i++) {
    if (employees[i].job === "Engineer") {
        const currentEngineer = new Engineer(employees[i].name, employees[i].id, employees[i].email, employees[i].github);
        htmlArr[i] = currentEngineer.getHTML();
    }
    if (employees[i].job === "Intern") {
        const currentIntern = new Intern(employees[i].name, employees[i].id, employees[i].email, employees[i].school);
        htmlArr[i] = currentIntern.getHTML();
    }
    if (employees[i].job === "Manager") {
        const currentManager = new Manager(employees[i].name, employees[i].id, employees[i].email, employees[i].officeNumber);
        htmlArr[i] = currentManager.getHTML();
    }
}
//console.log(htmlArr);
let customHTMLStr = "";
for(let i = 0; i<htmlArr.length;i++){
    customHTMLStr += htmlArr[i];
}
const makeFinalHTML = new makeHTML(customHTMLStr);
const finalHTMLStr = makeFinalHTML.getHTML();

fs.writeFile('./index.html',finalHTMLStr, ()=>{});
})();



