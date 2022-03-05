let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log(levelUp);

// ++ --

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;


//String Interpolation
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);

//ORRRR

const myName = 'Clayton'; 
const myCity = 'Oklahoma City';

console.log( `My name is ${myName}. My favorite city is ${myCity}`);

//ORRRR

let myClass = 'Codeacademy';
let myName = 'Clayton';

console.log(`My name is ${myName}. I am taking classes with ${myClass}`);

//ORRR

let myLang = 'JavaScript';
let job = 'FrontEnd Engineer';
let myName = 'Clayton';

console.log(`My name is ${myName}. I am learing ${myLang} to become a ${job}.`);



//typeOf Operator
const unknown1 = 'foo';
console.log(typeof unknown1);
 
const unknown2 = 10;
console.log(typeof unknown2);
 
const unknown3 = true; 
console.log(typeof unknown3);

// ORRR

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

newVariable = 1;
console.log(newVariable);
console.log(typeof newVariable);



// Review

let myName = 'Clayton';
let myAge = 24;
let myCity = 'Oklahoma City';
let myFavAnimal = 'Dog'
let numOfDogs = 1;

myName = 'Wingfield';
console.log(myName);
console.log(typeof myName);

myAge++;
console.log(myAge);
console.log(typeof myAge);

myCity = 'Bethany';
console.log(myCity);
console.log(typeof myCity);

myFavAnimal = 'Cat';
console.log(myFavAnimal);
console.log(typeof myFavAnimal);

numOfDogs =+ 7;
numOfDogs--;
console.log(numOfDogs);
console.log(typeof numOfDogs);


let myMoney = 100;

if(myMoney > 50){
    console.log(`You balance is high you have $ ${myMoney}`);
} else {
    console.log(`Your balance is low. You only have $ ${myMoney}`);
}



//Truthy and Falsy Assignment 

let myName ='';

let lastName = myName || 'No Name';

console.log(`You name is ${lastName}`);


//Ternary Operator // These can evaluate if something is true or false
let isNightTime = true;

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

//Another example

//Orginal Code 

if (isLocked) {
    console.log('You will need a key to open the door.');
  } else {
    console.log('You will not need a key to open the door.');
  }

//Refactored
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

//Original code
let isCorrect = true;

if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log('Incorrect!');
  }
// Refactored

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect');

//Orignal Code
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
  } else {
    console.log("I don't love that!");
  }

//Refactored
let favoritePhase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Test refactor

let favoriteGame = 'Runescape';

favoriteGame === 'Runescape' ? console.log('My favorite game') : console.log('Not my favorite game');

//Another Test

let myMoney = 100;

myMoney >= 50 ? console.log(`You have a health banlance. You have $${myMoney}.`) : console.log(`You have a low balance. You have $${myMoney}.`);



//If else statements 
let stopLight = 'Green';

if (stopLight === 'Red') {
    console.log(`Stop! The light is ${stopLight}.`);
} else if (stopLight === 'Yellow'){
    console.log(`Slow Down and Caution, the light is ${stopLight}`);
} else{
    console.log(`You are good to go! The Light is ${stopLight}`);
}


//Another example

let winRecord = 10;

if (winRecord <= 5) {
    console.log(`You did not make the playoffs. You only won ${winRecord} games.`);
} else if(winRecord <= 8 ){
    console.log(`You have a chance to make the playoffs. You won ${winRecord} games.`);
} else {
    console.log(`You made the playoffs. You won ${winRecord} games!`);
}


//Dog Chanlenge 
let annahAge = 25;

let lothYears = 6;

humanToSlothConvrsion = hannahAge * slothYears;

console.log(humanToSlothConvrsion);

//Death Calculator

let averageAgeOfDeath = 78.79;

let hannahAge = 25;

let lifeLeftCalculation = Math.round((hannahAge / averageAgeOfDeath * 100 ));

console.log(`You have completed ${lifeLeftCalculation}% of life so far.`);


//Switch

let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime' : 
        console.log('Limes are $1.49');
        break;
    case 'papaya' : 
        console.log('Papayas are $1.29');
        break;
    default: 
        console.log('Invalid item');
        break
}

//Playing with Switch (THIS DOES NOT WORK )

let myMoney = 100;

switch (myMoney) {
    case myMoney >= 75 :
        console.log(`You have a healthy balance. Your balance is $${myMoney}.`);
        break;
    case myMoney >= 50 :
        console.log(`You have a good balance. Your balance is $${myMoney}.`);
        break;
    case myMoney >= 1 :
        console.log(`You have a bad balance. Your balance is $${myMoney}.`);
        break;
    default:
        console.log(`You have no money. You balance is ${myMoney}.`);
    
    
    break;
}



let shaina = 30;

if(shaina < 30){
    console.log('you old as hell');
} else if (shaina < 20){
    console.log('you okay');
} else {
    console.log('You young');
}

