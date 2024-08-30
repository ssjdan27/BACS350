const prompt = require("prompt-sync")();
const METRIC = "metric";
const IMPERIAL = "imperial";
let unitSystem;
let userQuit = false;
let userBMIResults = [];

function weightCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

do {
  unitSystem = prompt(
    "Would you like to use metric or imperial units? (metric/imperial): "
  ).toLowerCase();
} while (unitSystem !== "metric" && unitSystem !== "imperial");

let weight, height;

while (!userQuit) {
  if (unitSystem === IMPERIAL) {
    weight = parseFloat(prompt("Enter your weight in pounds: "));
    while (isNaN(weight) || weight <= 0) {
      console.log(
        "The weight you entered is invalid. Please enter a positive number."
      );
      weight = parseFloat(prompt("Enter your weight in pounds: "));
    }
    height = parseFloat(prompt("Enter your height in inches: "));
    while (isNaN(height) || height <= 0) {
      console.log(
        "The height you entered is invalid. Please enter a positive number."
      );
      height = parseFloat(prompt("Enter your height in inches: "));
    }
    // conversion from pounds to kg and inches to meters
    weight = weight * 0.453592;
    height = height * 0.0254;
  } else if (unitSystem === METRIC) {
    weight = parseFloat(prompt("Enter your weight in kilograms: "));
    while (isNaN(weight) || weight <= 0) {
      console.log(
        "The weight you entered is invalid. Please enter a positive number."
      );
      weight = parseFloat(prompt("Enter your weight in kilograms: "));
    }
    height = parseFloat(prompt("Enter your height in meters: "));
    while (isNaN(height) || height <= 0) {
      console.log(
        "The height you entered is invalid. Please enter a positive number."
      );
      height = parseFloat(prompt("Enter your height in meters: "));
    }
  }

  let bmi = weight / (height * height);
  userBMIResults.push(bmi);
  console.log(
    "Your BMI is " + bmi.toFixed(2).toString() + " - " + weightCategory(bmi)
  );

  let userChoice;

  do {
    userChoice = prompt(
      "Would you like to enter another weight and height values into this program? (Y/N): "
    ).toLowerCase();
  } while (userChoice !== "y" && userChoice !== "n");

  if (userChoice === "n") {
    userQuit = true;
  } else {
    continue;
  }
}

console.log("\nHere are your BMI results from this program session: ");

for (let i = 0; i < userBMIResults.length; i++) {
  console.log(`Result ${i + 1}: ${userBMIResults[i].toFixed(2)}`);
}
