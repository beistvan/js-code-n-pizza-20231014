let n = 5;
let s = "";
for (let i = 1; i <= n; i++) {
  s = s + i;
  console.log(s);
}

let m = 5;

for (let i = 1; i <= m; i++) {

  let sor = "";

  for (let j = 1; j <= i; j++) {
    sor = sor + j;
  }

  console.log(sor);
}

n = 5;
s = "1";
for(let i = 2; i <= n + 1; i++) {
  console.log(s);
  s = s + i;
}

/*
"1"
"12"
"123"
"1234"
"12345"
"1"
"12"
"123"
"1234"
"12345"
"1"
"12"
"123"
"1234"
"12345"
*/
