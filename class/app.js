

// agile method (start with small, then go big)

// var str ='the quick brown fox jumps over the lazy dog';
// var toAdd = 'white cat';
// var toRemove = 'quick brown fox';
// var ind = str.indexOf(toRemove);
// //  (toRemove.length+ind) is the ending address of toRemove string in original string
// var newStr = str.slice(0, ind) + toAdd + str.slice((toRemove.length + ind));
// console.log(str, newStr);


// // replace()
// var str ='the quick brown fox jumps over the lazy dog';
// var newStr = str.replace('quick brown fox', 'white cat');
// console.log(str, newStr);


// // replace() globally
// var str ='the quick brown fox jumps quick brown fox over the quick brown fox lazy dog';
// var newStr = str.replace(/quick brown fox/g, 'white cat');
// console.log(str + ' ====> ' + newStr);



// random days
// var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// to get random no. b/w 0 n 6
// var randIndex = Math.floor((Math.random() * 7) );     // Math.round(Math.random() * 6)
// console.log(days[randIndex]);



// age in days
// var birthday = new Date ('September 30, 1994');
// var now = new Date();
// var age = now.getTime() - birthday.getTime();
// age = Math.round(age / (1000 * 3600 * 24));
// console.log(`My age in days is ${age}`);



// 
// var signal = prompt('Enter signal', 'red');
// switch (signal)
// {
//     case 'red':
//         console.log("STOP");
//         break;
//     case 'yellow':
//         console.log("READY");
//         break;
//     case 'green':
//         console.log("GO!");
//         break;
//     default:
//         console.log('No match');
// }



// var pi = (Math.PI).toFixed(3);
// console.log(pi);

// function calcCircumference (radius)
// {
//     var result = 2 * Math.PI * radius;
//     return result.toFixed(3);
// }

// function calcArea (radius) 
// {
//     var result = Math.PI * Math.pow(radius,2);
//     return result.toFixed(3);
// }

// var r = 5;
// // var r = +prompt("enter radius", 3);
// var circumference = calcCircumference(r);
// var area = calcArea(r);
// console.log(`Circumference of circle = ${circumference} \nArea of circle = ${area}`);



// var num;
// var ans = 5;
// var flag = false;
// while(flag != true)
// {
//     num = +prompt("enter any number", 0);
//     if(num == ans)
//     {
//         console.log('you have won');
//         flag = true;
//     }
// }




// window. methods
// function goFB() {
//     window.location.href = 'https://facebook.com';

//     // window.location.assign('https://facebook.com');
    
//     // doesn't let you go back to prvious page as it rewrites history
//     // window.location.replace('https://facebook.com');
// }



// function goBack()
// {
//     history.back();
// }


// function reLoad()
// {
//     window.location.reload(true);
// }


// function goForward()
// {
//     history.forward();
// }







// var monkeyWindow = window.open();
// monkeyWindow.location.href = 'popup.html';

// var monkeyWindow = window.open('popup.html');





























// var teachers = ['inzimam', 'faiza', 'mughal'];
// var students = ['habiba', 'khadija', 'javeria', 'ismat'];
// var ages = [26, 24, 28, 50];
// if(teachers.includes('faiza'))
// {
//     let data = students.map(
//         (item, index) => {
//             let arrObj = {};
//             arrObj.name = item;
//             arrObj.age = ages[index];
//             return arrObj; 
//         }
//     );
//     console.log(data);

// }




// console.log( 5>2 ? true : false )




// spread operator: instead of disturbing original ARRAY or OBJECT, creates new one; 
// also used to concat 2 or more arrays

// obsolete method
// var arr = [1,2,3,4];
// var arr1 = arr;        
// arr[0] = 8;                  // changes arr as well which we hadn't wanted
// console.log(arr, arr1);



// var arr = [1,2,3,4];
// var arr1 = [...arr];            
// arr1[0] = 9                     // now both array are d/f
// console.log(arr, arr1); 


// var arr2 = [5,6,7,8];
// // var arr3 = arr.concat(arr2); 
// var arr3 = [...arr, ...arr2];       // both this and above line give same results
// console.log(arr,  arr2, arr3);


// var str = 'abcd';
// var str2 = 'habiba';
// var str3 = {...str};
// console.log(str, str2, str3);


// var str = 'abcd';
// var str2 = 'habiba';
// var str3 = [...str, ..str2];
// console.log(str, str2, str3);



// WRONG WRONG WRONG WRONG WRONG WRONG WRONG WRONG WRONG WRONG WRONG 
// function sum(x,y,z)
// {
//     return x+y+z;
// }

// let arr = [3,4,5];
// let res = sum(arr);
// console.log(res);

// CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT CORRECT 
// function sum(x,y,z)
// {
//     return x+y+z;
// }

// let arr = [3,4,5];
// let res = sum(arr);
// console.log(res);


// SPREAD OP CAN ALSO BE USED IN OBJECT DESTRUCTURING
// let [a,b,c] = [1,2,3];
// let [d,e,f] = [4,5,6,7,8];
// console.log(a,b,c,d,e,f);           // OBJECT DESTRUCTURING

// let [a,b,c, ...z] = [3,4,5,6,7,8,9];   // z would get the rest of the elements as an array b/c of ...
// console.log(a,b,c,z);



// function abc()
// {
//     var a = 1+2;
//     console.log(a);
// }
// var z = abc();          // z gets undefined but there's no error per se; 
// console.log("z", z)     // i.e. function can always be assigned to a variable etc whether function returns or not
                        

// subtract multiple argumnts using reduce
// let subtract = (num1, ...others) => {
//     let result = others.reduce(
//         (total, current) => {
//             return total - current;
//         });
//     console.log(result);
//     // result -= num1;      // is the same as result = result - num1
//     result = num1 - result;
//     return result;
// }
// var ans = subtract(10,20,3,2,6,4,8,1);
// // var ans = subtract(10,20);
// console.log(ans);



// var a,b,c = 1;
// console.log(a,b,c);


// let foo =  (...e) => {
//     [a,b,c] = e;
//     console.log(a,b,c);
// }
// foo(1,2,3);





// OBJECT DESTRUCTURING
// let self = {
//     name: 'habiba',
//     age: 26,
//     status: 'active'
// };
// let {name, age, status} = self;
// console.log(name, age, status);

// let {name, age} = self;
// console.log(name, age, status);             // habiba 26

// let {name1, age1, status1} = self;          // these let/var/const have to be same as object key
// console.log(name1, age1, status1);          // undefined





// try-catch
// let addAlert = (a) => 
//     console.log(a);
// const num = 10;
// try 
// {
//     addAlert('Hello Everyone!');
//     num = 5;
// }
// catch (err)
// {
//     console.log(err);
// }


// function later()
// {
//     var r = setTimeout(alert('AOA'), 3000);     // give the function name only, don't call it here
// }

// let later = () => {
//     setTimeout(showAlert, 3000);
// }
// let showAlert = () => {
//     alert('Hello World!');
// }





// setInterval and setTimeout

// simple clock
// let clock = () => {

//     setInterval(() => {
//         let today = new Date();
//         let date = today.getDate();
//         let month = today.getMonth() + 1;
//         let year = today.getFullYear();
//         let h = checkTime(today.getHours());
//         let m = checkTime(today.getMinutes());
//         let s = checkTime(today.getSeconds());
//         let div = document.getElementById('myDiv');
//         div.innerHTML = `${date}-${month}-${year}\n${h}:${m}:${s}`;
        
//     }, 1000);
//     let checkTime = (arg) => {
//         if (arg < 10)
//         {
//             arg = `0${arg}`;
//         }
//         return arg;
//     }
// }