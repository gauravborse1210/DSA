let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  //for spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  //for num 1
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + "");
  }
  for (let j = i - 1; j >= 1; j--) {
    process.stdout.write(j + "");
  }
  console.log();
}
