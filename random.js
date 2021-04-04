let randomArr = new Array();
for (num = 0; num < 10; num++) {
    ranNum = Math.floor(Math.random() * 1000) % 900 + 100;
    randomArr.push(ranNum);
}
let largest = randomArr[0];
let largest_second = randomArr[0];
let smallest = randomArr[0];
let smallest_second = randomArr[0];

for (num = 1; num < randomArr.length; num++) {
    if (randomArr[num] < smallest_second) {
        if (randomArr[num] < smallest) {
            smallest_second = smallest;
            smallest = randomArr[num];
        }
        else { smallest_second = randomArr[num]; }
    }

    if (randomArr[num] > largest_second) {
        if (randomArr[num] > largest) {
            largest_second = largest;
            largest = randomArr[num];
        }
        else { largest_second = randomArr[num]; }
    }
}
console.log("2nd Largest number is: " + largest_second);
console.log("2nd Smallest number is: " + smallest_second);
console.log(randomArr);