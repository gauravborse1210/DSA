let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  //for star 1
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  //for spaces
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  //for star 2
  for (let j = 1; j <= i - 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = n; i >= 1; i--) {
  //for star 1
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  //for spaces
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  //for star 2
  for (let j = 1; j <= i - 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
