process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = "|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|\n";
let delay = 0;

for (let char of spinner) {
  setTimeout(() => process.stdout.write(`\r${char}`), delay);
  delay += 200;
}