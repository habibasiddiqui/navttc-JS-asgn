

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