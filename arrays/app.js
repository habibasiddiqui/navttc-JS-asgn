
// 1
// var arr = ['Habiba', 26, 'Pakistan'];
// var userInput = prompt("Enter your input", 'input');
// function inArray(word, arr) {
//     var flag;
//     for (var i = 0; i < arr.length; i++)
//     {
//         if( word == arr[i] )
//         {
//             flag++;
//             break;
//         }
//         else {
//             flag = 0;
//         }
//     }
//     if (flag == 1)
//         return true;
//     else
//         return false;
// }
// var inputInArr = inArray(userInput, arr);
// console.log(inputInArr);



// 2

// // using 1 for loop
// var firstName = ['maryam', 'habiba', 'esha'];
// var lastName = ['jameel', 'sultana', 'khan'];
// var fullName = [];
// if (firstName.length == lastName.length)
// {
//     for(var i = 0; i < firstName.length; i++)
//     {

//             fullName[i] = firstName[i] + ' ' + lastName[i];

//     }
// };
// console.log(fullName);



// // using 2 for loop (complicated method; trying to do it as 2d array)
// var firstName = ['maryam', 'habiba', 'esha'];
// var lastName = ['jameel', 'sultana', 'khan'];
// var fullName = [];
// if (firstName.length == lastName.length)
// {
//     for(var i = 0; i < firstName.length; i++)
//     {
//         for(var j = i; j < lastName.length; j++)
//         {
//             fullName[i] = firstName[i] + ' ' + lastName[j];
//             break;
//         }
//     }
// };
// console.log(fullName);




// var firstName = ['maryam', 'habiba', 'esha'];
// var lastName = ['jameel', 'sultana', 'khan'];
// var fullName = [];


// // map
// // fullName = firstName.map( () => {
// //     for (var j = lastName.length; j > 0; j--) {
// //         return lastName.shift();
// //     }
// // });



// console.log( fullName);



// 3
// var courses = [];
// var course;
// for (var i = 0; i < 5; i++)
// {
//     course = prompt(`enter course ${i+1}`, 'course');
//     courses.push(course);
// }

// function editCourse() {
//     var flag;
//     var origName =  prompt("enter original name of course", 'course');
//     var editName = prompt("enter edited name of course", 'changed course');
//     for (var j=0; j < courses.length; j++)
//     {
//         if (origName == courses[j])
//         {
//             courses.splice(j, 1, editName);
//             flag = true;
//             break;
//         }
//         else 
//         {
//             flag = false;
//         }
//     }
//     if (flag == false)
//         alert("Course not found");
// }
// editCourse();
// console.log(courses);



// 4
// function convertToTitleCase(str) {
//     var strArr = str.split(" ");
//     for (var i = 0; i < strArr.length; i++) 
//     {
//         strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
//     }
//     var titleCase = strArr.join(" ");
//     return titleCase;
// }
// var userInput = prompt("Enter a string: ", "write here");
// var result = convertToTitleCase(userInput);
// console.log(`User input: ${userInput}
// Output: ${result}`);



// 5
// function doubleArr (numArr){
//     var temp = [];
//     for (var i=0; i < numArr.length; i++)
//     {
//         temp[i] = numArr[i] * 2;
//     }
//     return temp;
// }

// var num = [2, 3, 5, 7, 11];
// var doubled = doubleArr(num);
// console.log(num, doubled);



// // var num = [2, 3, 5, 7, 11];
// // var doubled = [];
// // function doubleArr (numArr){
// //     for (var i=0; i < numArr.length; i++)
// //     {
// //         doubled[i] = numArr[i] * 2;
// //     }
// //     return doubled;
// // }

// // doubleArr(num);
// // console.log(num, doubled);



// 6
// function doubleArr (arr)
// {
    
//     arr.forEach(function(item, index) {
//         newArr[index] = item * 2;
//     })
// }
// var num = [4, 8, 1, 3, 13, 2];
// var newArr = [];
// doubleArr(num);
// console.log(num, newArr)



// 7
// function countVowelsInStr(str) {
//     var vowelCount=0;
//     var vowels = ['a','e', 'i', 'o','u'];
//     for (var i=0; i<str.length; i++)
//     {
//         for (var j=0; j<vowels.length; j++) 
//         {
//             if(str[i].toLowerCase() == vowels[j])
//             {
//                 vowelCount++;
//                 break;
//             }
//         }
//     }
//     return vowelCount;
// }
// var str = prompt("enter a string", 'write here');
// var numOfVowels = countVowelsInStr(str);
// console.log(`Vowels in the string are ${numOfVowels}`);


// // using includes()  // // can also be done using indexOf()
// function countVowelsInStr (str) {
//     var strArr = str.split("");
//     // console.log(strArr);
//     var vowelCount=0;
//     var vowels = ['a','e', 'i', 'o','u'];
//     for (var i=0 ; i <strArr.length; i++)
//     {
//         if (vowels.includes(strArr[i]))
//             vowelCount++;
//     }
//     return vowelCount;
// }
// var str = prompt("enter a string", 'write here');
// var numOfVowels = countVowelsInStr(str);
// console.log(`Vowels in the string are ${numOfVowels}`);




// 8
// function reverseNum(num) 
// {
//     var numCopy = num.toString().split("").reverse().join("");
//     numCopy = parseInt(numCopy);
//     return numCopy;
// }

// var number = 1234;
// var reversed = reverseNum(number);
// console.log(number, reversed);










