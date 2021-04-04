let monthMap = new Map();
for (month = 1; month <= 12; month++) {
    monthMap.set(month, 0);
}
for (birth = 1; birth <= 50; birth++) {
    let birthMonth = Math.floor(Math.random() * 10) % 12 + 1;
    count = monthMap.get(birthMonth) + 1;
    monthMap.set(birthMonth, count);
}
console.log(monthMap);
