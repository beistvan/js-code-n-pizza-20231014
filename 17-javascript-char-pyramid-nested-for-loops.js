let n = 4;
for (let i = 0; i < n; i++) {
  let s = "";
  for (let j = 0; j < n - i - 1; j++) {
    s += " ";
  }

  s += "";
  for (let j = 0; j < 2 * i + 1; j++) {
    s += "o";
  }
  console.log(s);
}

/*
"   o"
"  ooo"
" ooooo"
"ooooooo"
*/
