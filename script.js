// Task.....1

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

// Simple Progrma:

// var myAge = 20;
// var humanDogRatio = 7;
// var myDogAge = myAge * humanDogRatio;
// console.log("my dog age: " + myDogAge);

// Function:

// function myDogAge(myAge, humanDogRatio) {
//   var myDogAge = myAge * humanDogRatio;
//   console.log(myDogAge);
// }
// myDogAge(20, 7);

// <---------------------------------------------------------------------------------->

// Task.....2

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// <---------------------------------------------------------------------------------->

// Task.....3
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//   console.log("The increment button has been clicked");
// }

// <---------------------------------------------------------------------------------->

// Importance of Funcional FunctionsExample of function with race

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// Setting up the the race 🏎 🏎 🏎

// countdown();

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

// countdown();

// <---------------------------------------------------------------------------------->
// Task....4
// 1st js function

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function mylogger() {
//   console.log(42);
// }
// mylogger();

// <---------------------------------------------------------------------------------->
// Task....5

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// Create a function that logs out the sum of all the lap times/

// function logLapTimes() {
//   let lapTimes = lap1 + lap2 + lap3;
//   console.log("sum of all the lap times:", lapTimes);
//   console.log("sum of all the lap times :", lap1 + lap2 + lap3); //  Same as above
// }
// logLapTimes();

// localscope not a global scope

// <---------------------------------------------------------------------------------->
// Task..6

// let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLapsCompleted() {
//   console.log(lapsCompleted);
//   lapsCompleted += 1;
// }

// runing function incrementLaps three times
// incrementLapsCompleted();
// incrementLapsCompleted();
// incrementLapsCompleted();
// console.log(lapsCompleted);

// <---------------------------------------------------------------------------------->
// Task....7

// NOW back to the Counter Application

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to refslect the new count

// let countEl = (document.getElementById("count-el").innerText = count); Another method to change h2 vlaue
let count = 0;
function increment() {
  count += 1;
  console.log(count);
  document.getElementById("count-el").innerText = count;
  //   console.log("increment button is clicked");
}
increment();

function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
  document.getElementById("counted-ele").innerText = count;
}
reset();

// Task 08
// Create a function, save(), which logs out the count when it's called
// Create a SAVE button.
//         Set the id to "save-btn" and call the save() function when it's clicked

function saved() {
  console.log("counted:" + count);
  document.getElementById("counted-ele").innerText = count;
}
save();

// <---------------------------------------------------------------------------------->
// Task 09
// Create a variable, message, that stores the string: "You have tree new notifications"
// let userName = "Umair Azmat";
// let notifications = "You have tree new notifications";

// console.log(notifications + "," + userName);
// let message = notifications + "," + userName;

// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message;
// console.log(messageToUser);
// <---------------------------------------------------------------------------------->
// Task 10
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Uamir";
// let greeting = "Hi, My name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// <---------------------------------------------------------------------------------->
// Task 11
// { <p id="welcome-el"></p> }
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let name = window.prompt("Enter userName");
let greeting = "Hi, Welcome ";
let greetings = "to the Counter App";
let welcomeMessage = greeting + " " + name + " " + greetings;
console.log(welcomeMessage);
document.getElementById("welcome-el").textContent = welcomeMessage + "👋";
// <---------------------------------------------------------------------------------->

// Task 12
// / Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HEREss
// HINT: count = count + 1

// <---------------------------------------------------------------------------------->
// Task 13
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  let saveCount = count + " - ";
  document.getElementById("save-el").textContent += saveCount;
  console.log(count);
}
// <---------------------------------------------------------------------------------->
// Task 14

// Reset all enteries

function reset_previous() {
  saveCount = 0;
  document.getElementById("save-el").textContent = "";
}
// <---------------------------------------------------------------------------------->
