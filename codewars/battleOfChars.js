/**
 * Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
 */

function battle(x, y) {
  let scoreX = 0;
  let scoreY = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'A') {
      scoreX = scoreX + 1;
    } else if (x[i] === 'B') {
      scoreX = scoreX + 2;
    } else if (x[i] === 'C') {
      scoreX = scoreX + 3;
    } else if (x[i] === 'D') {
      scoreX = scoreX + 4;
    } else if (x[i] === 'E') {
      scoreX = scoreX + 5;
    } else if (x[i] === 'F') {
      scoreX = scoreX + 6;
    } else if (x[i] === 'G') {
      scoreX = scoreX + 7;
    } else if (x[i] === 'H') {
      scoreX = scoreX + 8;
    } else if (x[i] === 'I') {
      scoreX = scoreX + 9;
    } else if (x[i] === 'J') {
      scoreX = scoreX + 10;
    } else if (x[i] === 'K') {
      scoreX = scoreX + 11;
    } else if (x[i] === 'L') {
      scoreX = scoreX + 12;
    } else if (x[i] === 'M') {
      scoreX = scoreX + 13;
    } else if (x[i] === 'N') {
      scoreX = scoreX + 14;
    } else if (x[i] === 'O') {
      scoreX = scoreX + 15;
    } else if (x[i] === 'P') {
      scoreX = scoreX + 16;
    } else if (x[i] === 'Q') {
      scoreX = scoreX + 17;
    } else if (x[i] === 'R') {
      scoreX = scoreX + 18;
    } else if (x[i] === 'S') {
      scoreX = scoreX + 19;
    } else if (x[i] === 'T') {
      scoreX = scoreX + 20;
    } else if (x[i] === 'U') {
      scoreX = scoreX + 21;
    } else if (x[i] === 'V') {
      scoreX = scoreX + 22;
    } else if (x[i] === 'W') {
      scoreX = scoreX + 23;
    } else if (x[i] === 'X') {
      scoreX = scoreX + 24;
    } else if (x[i] === 'Y') {
      scoreX = scoreX + 25;
    } else if (x[i] === 'Z') {
      scoreX = scoreX + 26;
    }
  }
  for (let i = 0; i < y.length; i++) {
    if (y[i] === 'A') {
      scoreY = scoreY + 1;
    } else if (y[i] === 'B') {
      scoreY = scoreY + 2;
    } else if (y[i] === 'C') {
      scoreY = scoreY + 3;
    } else if (y[i] === 'D') {
      scoreY = scoreY + 4;
    } else if (y[i] === 'E') {
      scoreY = scoreY + 5;
    } else if (y[i] === 'F') {
      scoreY = scoreY + 6;
    } else if (y[i] === 'G') {
      scoreY = scoreY + 7;
    } else if (y[i] === 'H') {
      scoreY = scoreY + 8;
    } else if (y[i] === 'I') {
      scoreY = scoreY + 9;
    } else if (y[i] === 'J') {
      scoreY = scoreY + 10;
    } else if (y[i] === 'K') {
      scoreY = scoreY + 11;
    } else if (y[i] === 'L') {
      scoreY = scoreY + 12;
    } else if (y[i] === 'M') {
      scoreY = scoreY + 13;
    } else if (y[i] === 'N') {
      scoreY = scoreY + 14;
    } else if (y[i] === 'O') {
      scoreY = scoreY + 15;
    } else if (y[i] === 'P') {
      scoreY = scoreY + 16;
    } else if (y[i] === 'Q') {
      scoreY = scoreY + 17;
    } else if (y[i] === 'R') {
      scoreY = scoreY + 18;
    } else if (y[i] === 'S') {
      scoreY = scoreY + 19;
    } else if (y[i] === 'T') {
      scoreY = scoreY + 20;
    } else if (y[i] === 'U') {
      scoreY = scoreY + 21;
    } else if (y[i] === 'V') {
      scoreY = scoreY + 22;
    } else if (y[i] === 'W') {
      scoreY = scoreY + 23;
    } else if (y[i] === 'X') {
      scoreY = scoreY + 24;
    } else if (y[i] === 'Y') {
      scoreY = scoreY + 25;
    } else if (y[i] === 'Z') {
      scoreY = scoreY + 26;
    }
  }
  if (scoreX > scoreY) {
    return x.toUpperCase();
  } else if (scoreX < scoreY) {
    return y.toUpperCase();
  } else {
    return 'Tie!';
  }
}

console.log(`battle('WHAT', 'HELLO') will return Tie : ${battle('WHAT', 'HELLO')}`);
