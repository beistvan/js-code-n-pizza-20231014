let s = "\n";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    s += j;
  }
  s += "\n";
}
console.log(s);

/* Output:
"
1
12
123
1234
12345
"
*/
