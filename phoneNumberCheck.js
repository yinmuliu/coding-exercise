// If the phone number has any non-numerals in it they should be removed/ignored
// If the phone number is 11 digits and the first number is 1 trim the 1 and use the first 10 digits
// If the phone number is 11 digits and the first number is not 1 then it is an invalid number
// If the phone number is 10 digits long it is valid; if not it is invalid

// Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed) or if not valid returns '00000000' (ten zeroes)
// Write a Javascript function which returns a formatted version of the given phone number

const formatPhoneNumber = (string) => {
  let formattedNumber = "";
  // the g is a regular expression for global search in string. the \D character matches all non-digit characters.
  stringCleaned = string.replace(/\D/g, "");
  if (
    stringCleaned.length === 10 ||
    (stringCleaned.length === 11 && stringCleaned.startsWith(1))
  ) {
    if (stringCleaned.length === 11) {
      // trim the first num
      stringCleaned = stringCleaned.substring(1);
    }
    // regular expressions to add formatting. second half backrefrences the first half and puts it in a string.
    formattedNumber = stringCleaned.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
  } else {
    formattedNumber = "0000000000";
  }
  return formattedNumber;
};

console.log(formatPhoneNumber("01^&345/%90"));
console.log(formatPhoneNumber("11234567890"));
console.log(formatPhoneNumber("14234567890"));

// console.log(cleanPhoneNumber("11234567890")); // return (123) 456-7890
// console.log(cleanPhoneNumber("1234567890")); // return (123) 456-7890
