//This code works, last two functions are combined. Leaving this here to preserve working code while playing with scope in onlin editor :)

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



// Add your functions below:


const validateCred = (cardArray) => {
    let valuesToMultiply = [];
    let unmultipliedValues = [];
    let multipliedValues = [];

    for (let i = cardArray.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
            valuesToMultiply.push(cardArray[i]);
        }
      else if (i % 2 !== 0) {
            unmultipliedValues.push(cardArray[i]);
      }
    }


    //console.log(valuesToMultiply);
    for (let i = 0; i < valuesToMultiply.length; i++) {
     // let multipliedValues = (valuesToMultiply[i] * 2);
  valuesToMultiply[i] *= 2;
  if (valuesToMultiply[i] > 9) {
       multipliedValues.push(valuesToMultiply[i] - 9);
  }
  else if (valuesToMultiply[i] <= 9) {
       multipliedValues.push(valuesToMultiply[i]);
  }
    }

        let sumOfMultipliedValuesArray = multipliedValues.reduce((a, b) => a + b, 0);


        let sumOfUnmultipliedValuesArray = unmultipliedValues.reduce((a, b) => a + b, 0);

        let sumOfAllCreditCardDigits = sumOfMultipliedValuesArray + sumOfUnmultipliedValuesArray;
   //for (let i = 0; i < cardArray.length; i++) {

         if (sumOfAllCreditCardDigits % 10 === 0) {
           //console.log('congrats! This is a valid credit card');
           //let isValid = 1;
           return true;
         }
         else if (sumOfAllCreditCardDigits % 10 != 0) {
           //console.log('Not a valid credit card :(');
           //let isValid = 0;
          return false;
         }
   }



let invalidCardsArray = [];

const findInvalidCards = (arr) => {
  //let validCardsArray = [];
 //let invalidCardsArray = [];

   for (let i = 0; i < arr.length; i++) {
     validateCred(arr[i]);
     console.log(validateCred(arr[i]));

        if (validateCred(arr[i]) === false) {
        //console.log('Bad card!');
        invalidCardsArray.push(arr[i]);
     }
   }
   return invalidCardsArray;
   //console.log(invalidCardsArray);
     /*
        else if (validateCred(arr[i]) === true) {
        //console.log('Good card!');
        validCardsArray.push(arr[i]);
        return validCardsArray;
   }
   */

//console.log(findInvalidCards.invalidCardsArray);

//findInvalidCards.invalidCardsArray = invalidCardsArray;

//let invalidCardsArray = findInvalidCards();
//let invalidCardsArray;

const idInvalidCardCompanies = (arr) => {
  let companiesToNotify = [];
  let invalidCardsArray = findInvalidCards();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 3 && companiesToNotify.includes('Amex') === false) {
        companiesToNotify.push('Amex');
    }
    else if (arr[i][0] === 4 && companiesToNotify.includes('Visa') === false) {
        companiesToNotify.push('Visa');
    }
    else if (arr[i][0] === 5 && companiesToNotify.includes('Mastercard') === false) {
        companiesToNotify.push('Mastercard');
    }
    else if (arr[i][0] === 6 && companiesToNotify.includes('Discover') === false) {
        companiesToNotify.push('Discover');
    }
    else {
      return 'Company not found';
    }

  }
}



    // commenting out test code:
    console.log(companiesToNotify);
    //console.log(validCardsArray);

//console.log(companiesToNotify);

}



/*
///test code copied from elsewhere
for (let i = 0; i < arr.length; i++) {
    console.log(`Sub-array ${i}: ${arr[i]}`);
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
        */


/*
 //Commenting out test logging code
    console.log('The values to multiply array: ' + valuesToMultiply);
    console.log('The un-multiplied values array: ' + unmultipliedValues);
    console.log('The multiplied values array after subtraction: ' + multipliedValues);

    console.log('The sum of the multiplied values array is: ' + sumOfMultipliedValuesArray);
    console.log('The sum of the un-multiplied values array is: ' + sumOfUnmultipliedValuesArray);
console.log('The sum of both arrays is: ' + sumOfAllCreditCardDigits);
/*
console.log(sumOfAllCreditCardDigits/10);
*/


    validateCred(invalid2);
    findInvalidCards(batch);
    idInvalidCardCompanies(invalidCardsArray);

/*
////copied code to test this out
let testarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter out all elements that are located at an even index in the array.

let newtestarr = testarr.filter((element, index) => {
  return index % 2 === 0;
})

console.log(newtestarr);
// [1, 3, 5, 7, 9]



///more copied code
var sum = a.reduce(function(a, b) { return a + b; }, 0);

sum = arr.reduce((a, b) => a + b, 0);

const initialValue = 0;
let sumOfMultipliedAndUnmultpliedArrays = multipliedValues.reduce(a, b) => a + b, 0);
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

*/


