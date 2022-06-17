let userName = "Bro Code";
let phoneNumber = "123-456-7890";

console.log(userName.lenght);     // Lenght of the string
console.log(userName.charAt(0));  // Give char at index ...
console.log(userName.indexOf("o"));  // Give index of that character
console.log(userName.lastIndexOf("o")) // Give index of last o on string

userName = userName.trim();  // Take extra spaces out
userName = userName.toUpperCase();  // Take everything upper case
userName = userName.toLowerCase();  // Take everything lower case

phoneNumber = phoneNumber.replaceAll("-","");

console.log(phoneNumber);

// There a special one called slice()

let fullName = "Eduardo Rojas";
let firstName;
let lastName;

//firstName = fullName.slice(0, 7);
//lastName = fullName.slice(8);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" "));

console.log(firstName);
console.log(lastName);