"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
function addNumber(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timestamp);
}
buttonElement.addEventListener('click', () => {
    const num1Value = num1.value;
    const num2Value = num2.value;
    console.log(addNumber(num1Value, num2Value));
    const numresult = addNumber(+num1Value, +num2Value);
    console.log(numresult);
    numResults.push(numresult);
    printResult({ val: numresult, timestamp: new Date() });
    console.log(numResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
