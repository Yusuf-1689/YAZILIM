// ! if statement example
// check if positive


// const n1 = prompt('Enter a number');
// console.log(n1, typeof n1);

// if (n1 > 0){
//     console.log(`${n1} positive`);
// } else if (n1 < 0) {
//     console.log(`${n1} is negative`);
// }else {
//     console.log(`the number is 0`);
// }
// ! example 2 chest size

// https://www.perryellis.com/pages/size-chart

// suggest size for men as XS S M L XL XXL on chest size

// const chest = prompt('beden olcunuzu girin');




// ! example 2 three number comparison 

// Write a JavaScript program that accept three integers and display the greatest

// const n1 = prompt ('Enter a number:');
// const n2 = prompt ('Enter a number:');
// const n3 = prompt ('Enter a number:');

// if (n1 > n2 && n1 > n3) {
//     console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// }
// else if (n2 > n1 && n2 > n3) {
//     console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// }
// else console.log(`${n3} is the greatest among ${n2} and ${n1}`);

// const age = 23;

// let result = '';

// if (age >= 18){
//     result = 'You are eligible '
// }
// const isLegal = age >= 18 ;
// console.log(isLegal);


// const n1 = 4;
// const result = 
// n1 >= 0 ? (n1 == 0 ?  'zero'  : `${n1} is positive `) : 'negative';

// console.log(result);

// evaluate if a human can drive a car or not
// let canDrive = false;
// const hasDriversLicense = false;
// const hasGoodVision = false;

// const isHandicapped = false;
// const usingRegularCar = false;
// const usingDisabledCar = true;


// result = 
//     hasDriversLicense && hasGoodVision 
//     ? !isHandicapped 
//             ? 'can drive'
//              :  !usingRegularCar
//             ? 'cannot drive'
//             : 'can drive'
//     : 'cannot drive';
// console.log(result);

//! example-5  cw weekly program :exclamation:your turn :technologist:
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.


const day = prompt("enter a day: ").toLowerCase();

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log(`Inclass`);
        break
    case "friday":
        console.log(`Teamwork`);
        break
    case "saturday":
        console.log(`Inclass and workshop`);
        break
    case "sunday":
        console.log(`Self study.`);
        break
    default: 
        console.log(`${day} is not a day.`);
}





