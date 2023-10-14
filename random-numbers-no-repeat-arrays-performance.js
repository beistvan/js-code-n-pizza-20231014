let total = 0;
let n = 100000;
for (let k = 0; k < n; k++ ) {
  let count = 0;
  let array = [];
  let i = 0;
  while (i < 5) {
    let num = Math.floor(Math.random() * 90) + 1;
    if (array.indexOf(num) == -1) {
      array.push(num);
      i++;
    }
    count++;
  }
  if (count > 5) {
    //console.log(array, count);
    total++
  }
}

console.log(total + "/" + n + ", " + Math.round(total / n * 100) + "%");

// "21701/1000000, 2%"
// "10757/100000, 11%"
