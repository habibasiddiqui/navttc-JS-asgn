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



// 14
// var str = prompt("Enter your string", 'write here!');
// var exclaimInd = str.indexOf('!');
// if(exclaimInd != -1)
// {
//     console.log(`excaimation mark is found at ${exclaimInd}`);
// }
// else 
//     console.log("exclaimation mark not found");



// 15
// var str = prompt("Enter your string", 'write  here');

// // // just once using indexOf()
// // var twoSpaces = str.indexOf('  ');
// // if(twoSpaces != -1)
// //     console.log("2 spaces found");
// // else 
// //     console.log("2 spaces NOT found");


// // // more than once using slice()
// var flag = 0;
// for (var i=0; i<str.length; i++)
// {
//     if(str.slice(i, i+2) == '  ')
//     {
//             flag++;
//     }
// }
// if (flag == 0)
//     console.log('two spaces NOT found');
// else
//     console.log(`${str}
//     two spaces found ${flag} times`);



// 16
// agile method (start with small, then go big)

// var str ='the quick brown fox jumps over the lazy dog';
// var toAdd = 'white cat';
// var toRemove = 'quick brown fox';
// var ind = str.indexOf(toRemove);
// //  (toRemove.length+ind) is the ending address of toRemove string in original string
// var newStr = str.slice(0, ind) + toAdd + str.slice((toRemove.length + ind));
// console.log(str, newStr);


// // replace() just once
// var str ='the quick brown fox jumps over the lazy dog';
// var newStr = str.replace('quick brown fox', 'white cat');
// console.log(str, newStr);


// // replace() globally
// var str ='the quick brown fox jumps quick brown fox over the quick brown fox lazy dog';
// var newStr = str.replace(/quick brown fox/g, 'white cat');
// console.log(str + ' ====> ' + newStr);



// 17
// var num = +prompt("Enter a number", 12.67);
// var decimalPlace = +prompt("Enter decimal places", 3);
// var newNum  = num.toFixed(decimalPlace);
// console.log(`${num} limited to ${decimalPlace} decimal places is ${newNum}`);


// using function
// function limitDecimalPlaces (num, dp)
// {
//     var changed = num.toFixed(dp);
//     return changed;
// }
// var num = +prompt("Enter a number", 12.67);
// var decimalPlace = +prompt("Enter decimal places", 3);
// var newNum = limitDecimalPlaces(num, decimalPlace);
// console.log(`${num} limited to ${decimalPlace} decimal places is ${newNum}`);



// 18
// // inclusive of only start limit
// function generateRandom (start, end)
// {
//         var randomNum = (Math.random() * (end - start) ) + start;
//         randomNum = Math.floor(randomNum);
//         return randomNum;
// }
// for (var i=0; i <10; i++)
// {
//     var newNum = generateRandom(2, 7);
//     console.log(newNum);
// }


// // inclusine of both limits
// function generateRandom (start, end)
// {
//         var randomNum = (Math.random() * ((end - start) + 1)) + (start);
//         randomNum = Math.floor(randomNum);
//         return randomNum;
// }
// for (var i=0; i <10; i++)
// {
//     var newNum = generateRandom(2, 7);
//     console.log(newNum);
// }



// 19
// var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
// var ind = Math.floor(Math.random() * 10);
// console.log(`your item at index ${ind} is ${numbers[ind]}`);



// date() functions

// function currentDate()
// {
//     var current = new Date();
//     current = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDay()}`;
//     return current;
// }

// var date = currentDate();
// console.log(date);



// function currentTime()
// {
//     var current = new Date();
//     current = `${current.getHours()}:${current.getMinutes() + 1}:${current.getSeconds()}`;
//     return current;
// }

// var time = currentTime();
// console.log(time);