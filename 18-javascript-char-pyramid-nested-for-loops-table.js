let n = 4;

for (let i = 1; i <= n; i++) {

  let s = "";

  for(let j = n - i; j >= 0; j--) { // " "
    s = s + " ";
  }

  s = s + "o";

  for (let j = 1; j <= i - 1; j++) { // "o"
    s = s + "oo";
  }

  console.log(s);
}


// i | " " | "o"
//--------------
// 1 |  3  |  1
// 2 |  2  |  3
// 3 |  1  |  5
// 4 |  0  |  7

/*
"    o"
"   ooo"
"  ooooo"
" ooooooo"
*/

//   for (let j = 1; j <= n - i; j++) {
//     s = s + " ";
//   }
