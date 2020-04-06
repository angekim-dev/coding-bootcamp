function invertCase(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(invertCase("hEllo upSiDeDOWNworld"));

//Write a function called invertCase
//that expects a string as a parameter.
//This function should return a new string
//with all the same characters as the string that was passed in
//but with the cases of the alphabetic characters switched.
//Uppercase characters should become lowercase
//and lowercase letters should become uppercase.
//Characters that are not alphabetic should not change.
//The toUpperCase and toLowerCase methods that all strings have
//will come in handy here.
