/**
 * create a simple password validation function, as seen on many websites.

 * The rules for a valid password are as follows:

 * There needs to be at least 1 uppercase letter.
 * There needs to be at least 1 lowercase letter.
 * There needs to be at least 1 number.
 * The password needs to be at least 8 characters long.
 */

function password(str) {
  if (str.length < 8) {
    return false;
  }

  const chars = Array.from(str);

  const hasUpperCase = chars.some(char => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char));
  const hasLowerCase = chars.some(char => 'abcdefghijklmnopqrstuvwxyz'.includes(char));
  const hasNumbers = chars.some(char => '0123456789'.includes(char));

  return hasUpperCase && hasLowerCase && hasNumbers;
}

console.log(`password('thePassowrd) returns false | ${password('thePassword')}`);
