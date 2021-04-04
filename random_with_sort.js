let randomArr = new Array();
for (num = 0; num < 10; num++) {
    ranNum = Math.floor(Math.random() * 1000) % 900 + 100;
    randomArr.push(ranNum);
}
randomArr.sort();
console.log("2nd Largest number is: " + randomArr[randomArr.length-2]);
console.log("2nd Smallest number is: " + randomArr[1]);
console.log(randomArr);