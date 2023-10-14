// Numbers Divisible By Three
console.log("First Method:")
for (let i = 100; i < 120; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

console.log("Second Method:")
for (let i = 102; i < 120; i += 3) {
  console.log(i);
}
