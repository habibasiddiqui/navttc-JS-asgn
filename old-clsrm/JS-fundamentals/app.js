// 1
// alert(`Habiba Sultana 
// Web Development`);
// // alert("Habiba Sultana" + "\n" + "Web Development");



// 2
// var birthYear = 1994;
// alert(`Type of birth year is ${typeof(birthYear)}`);



// 3
// var heading = "Rules for naming JS variables";
// var rule1 = "Variable names can only contain letters, numbers, $ and _ . For example $my_1stVariable"
// var rule2 = "Variables must begin with a letter, $ or _ . For example $name, _name or name";
// var rule3 = "Variable names are case-sensitive.";
// var rule4 = "Variable names should not be JS keywords.";
// document.write (`${heading.bold()} <br><br><br> ${rule1} <br> ${rule2} <br> ${rule3} <br> ${rule4}`);



// 4
// var ageInYears = +prompt("Enter age", 20);
// var ageInDays = ageInYears * 365;
// console.log(`Your age is ${ageInDays} days`);



// 5
// function incrementNum (num) {
//     num++;
//     return num;
// }

// var userNum = +prompt("enter a number", 6);
// var res = incrementNum(userNum);
// console.log(`Your number was ${userNum}. 
// Incremented value is ${res}`);



// 6
// function decrementNum (num) {
//     num--;
//     return num;
// }

// var userNum = +prompt("enter a number", 6);
// var res = decrementNum(userNum);
// console.log(`Your number was ${userNum}. 
// Decremented value is ${res}`);



// 7
// function numSquare (num) {
//     var squared;
//     // squared = Math.pow(num, 2);
//     squared = num * num;
//     return squared;
// }
// var userNum = +prompt("enter a number", 5);
// var res = numSquare(userNum);
// console.log(`Square of ${userNum} is ${res}`);



// 8
// var num = +prompt("Enter an integer", 9);
// if (num > 0)
//     console.log(`Positive integer`);
// else if (num < 0)
//     console.log(`Negative integer`);
// else if (num == 0)
//     console.log(`Zero`);
// else
//     console.log(`Not integer`);



// // 9
// var usDollar = 10;
// var saudiRiyal = 25;
// var usDollar_PKR = 163;
// var saudiRiyal_PKR = 43;
// var total_PKR = (usDollar * usDollar_PKR) + (saudiRiyal * saudiRiyal_PKR);
// console.log(`${usDollar} US Dollar and ${saudiRiyal} Saudi Riyal are equal to ${total_PKR} PKR`);



// 10
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// // --a ===> 1    (a=1, b=1)
// // --a - --b ===> 1     (a=1, b=0)   
// // --a - --b + ++b ===> 2    (a=1, b=1)
// // --a - --b + ++b + b-- ===> 3 (a=1, b=0)
// console.log(`${a}, ${b}, ${result}`);



// 11
// var city = prompt ("Enter a city", 'Karachi');
// if (city.toLowerCase() == 'karachi')
//     console.log(`Welcome to the City of Lights`);
// else if (city.toLowerCase() == 'lahore')
//     console.log(`Welcome to the Historical City`);
// else if (city.toLowerCase() == 'quetta')
//     console.log(`Welcome to the Cold City`);
// else 
//     console.log(`Wrong answwer`);



// 12
// var num1 = +prompt('Enter your first number');
// var op = prompt('Enter your operation', '+, -, *, /, %' );
// var num2 = +prompt('Enter your second number');
// var res;
// if (op == '+')
// {
//     res = num1 + num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '-')
// {
//     res = num1 - num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '*')
// {
//     res = num1 * num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '/')
// {
//     res = num1 / num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '%')
// {
//     res = num1 % num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else 
//     alert("Invalid operation");



// 13
// var userSalary = +prompt ("Enter salary", 50000);
// if (userSalary < 60000)
// {
//     console.log("You are a junior developer");
// }
// else if ( (userSalary >= 60000) && (userSalary < 100000))
// {
//     console.log("You are a web developer");
// }
// else if (userSalary >= 100000)
// {
//     console.log("You are a software engineer");
// }
// else 
//     console.log("Not a developer");







