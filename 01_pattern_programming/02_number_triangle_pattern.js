let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  for (let j = i; j > 0; j--) {
    process.stdout.write(j + " ");
  }
  console.log();
}
