let max = 50;
let min = 0;

const Random = Math.round(Math.random() * (max - min + 1) + min);

let tries = 5;

const tryNumber = (num) => {
  if (num < min || num > max) return `Only numbers between ${min} and ${max}`;
  if (typeof num !== "number") return "Only numbers";

  if (tries === 0) return "No more tries";

  tries -= 1;

  if (num > Random) {
    max = num;
    return `Try smaller number. Tries left: ${tries}. [${min}, ${max}]`;
  }

  if (num < Random) {
    min = num;
    return `Try bigger number. Tries left: ${tries}. [${min}, ${max}]`;
  }

  if (num === Random) {
    tries = 0;
    return `Correct! The number is ${num}`;
  }
};
