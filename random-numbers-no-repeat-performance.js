let num1, num2, num3, num4, num5;
let total = 0;
let n = 10000000;
for (let i = 0; i < n; i++) {
    let count = 0;
    do {
        num1 = Math.floor(Math.random() * 90) + 1;
        num2 = Math.floor(Math.random() * 90) + 1;
        num3 = Math.floor(Math.random() * 90) + 1;
        num4 = Math.floor(Math.random() * 90) + 1;
        num5 = Math.floor(Math.random() * 90) + 1;
        count++;
    } while (num1 == num2 || num1 == num3 || num1 == num4 || num1 == num5 ||
        num2 == num3 || num2 == num4 || num2 == num5 ||
        num3 == num4 || num3 == num5 ||
        num4 == num5);
    if (count > 1) {
        //console.log(num1, num2, num3, num4, num5, count);
        total++;
    }
}

console.log(total, "/", n, Math.round(total / n * 100), "%");
