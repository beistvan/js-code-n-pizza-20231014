let n = 5;

let spacek = n - 1;
let okszama = 1;

for (let i = 1; i <= n; i++) {

  let s = "";

  for (let j = 1; j <= spacek; j++) {
    s = s + " ";
  }

  for (let j = 1; j <= okszama; j++) {
    s = s + "o";
  }

  console.log(s);
  spacek = spacek - 1;
  okszama = okszama + 2;
}

/*
"    o"
"   ooo"
"  ooooo"
" ooooooo"
"ooooooooo"
*/
