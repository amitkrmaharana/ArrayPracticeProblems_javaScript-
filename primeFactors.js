let primeFactorsArr = new Array();
const prompt = require("prompt-sync")();
const input = prompt("Enter a number to display its Prime Factors: ");
let number = parseInt(input);
let index = 0
for (num = 2; num <= number; num++) {
    remain = number % num;
    if (remain == 0) {
        primeFactorsArr[index] = num;
        number /= num;
        index++;
        num--;
    }
}
console.log("Prime Factors are : \n" + primeFactorsArr);