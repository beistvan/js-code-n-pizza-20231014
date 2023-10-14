let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0;

do {
  num1 = Math.floor(Math.random() * 90) + 1;
  num2 = Math.floor(Math.random() * 90) + 1;
  num3 = Math.floor(Math.random() * 90) + 1;
  num4 = Math.floor(Math.random() * 90) + 1;
  num5 = Math.floor(Math.random() * 90) + 1;
} while (num1 == num2 || num1 == num3 || num1 == num4 || num1 == num5 ||
         num2 == num3 || num2 == num4 || num2 == num5 ||
         num3 == num4 || num3 == num5 ||
         num4 == num5);

console.log(num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5);
