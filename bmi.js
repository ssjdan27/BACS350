const prompt = require('prompt-sync')();

let weight = parseFloat(prompt('What is your weight in Kilograms?: '));
let height = parseFloat(prompt('What is your height in meters?: '));

let bmi = weight / (height * height)

function weightCategory(bmi){
    if (bmi < 18.5){
        return 'Underweight'
    }
}

console.log(weightCategory(5))