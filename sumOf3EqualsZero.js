let numArr = new Array();
const prompt = require("prompt-sync")();
for (index = 0; index < 10; index++) {
    const input = prompt("Enter number " + (index + 1) + ": ");
    let num = parseInt(input);
    numArr.push(num);
}
console.log("You entered numbers as follows:\n" + numArr);
for (i = 0; i < 8; i++) {
    for (j = (i + 1); j < 9; j++) {
        for (k = (j + 1); k < 10; k++) {
            sum = numArr[i] + numArr[j] + numArr[k];
            if (sum == 0) {
                let sumZeroArr = new Array();
                sumZeroArr.push(numArr[i]);
                sumZeroArr.push(numArr[j]);
                sumZeroArr.push(numArr[k]);
                console.log("The number which sums to zero are: \n" + sumZeroArr);
            }
        }
    }
}