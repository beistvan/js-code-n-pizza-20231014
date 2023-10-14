let array = [];
let i = 0;
while (i < 5) {
  let num = Math.floor(Math.random() * 90) + 1;
  if (array.indexOf(num) == -1) {
    array.push(num);
    i++;
  }
}

console.log(array);
