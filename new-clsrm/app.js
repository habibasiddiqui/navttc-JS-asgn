
// 1
function paraInvisible()
{
    var p = document.getElementsByClassName('blue');
    p[0].className = 'invisible';
}



// 2
function changeCity()
{
    var d = document.getElementById('city');
    var p = d.getElementsByTagName('p');
    p[1].innerHTML = "Sydney";
}



// 3
function add()
{
    var d1 = document.getElementById('country');
    var para1 = document.createElement('P');
    var country = document.createTextNode('USA');
    d1.appendChild(para1);
    para1.appendChild(country);

    var d2 = document.getElementById('city');
    var para2 = document.createElement('P');
    var city = document.createTextNode('New York');
    d2.appendChild(para2);
    para2.appendChild(city);
}



// 4
function stopRightClick()
{
    document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
}



// 5
// function checkForm()
// {
//     var name = document.getElementById('name');
//     var age = document.getElementById('age');
//     var cnic = document.getElementById('cnic');
//     if(name.value.length == 0) 
//     // || age.length == 0 || cnic.length == 0)
//     {
//         // name.style.backgroundColor = 'red';
//         name.title = "Please enter name";
//         name.focus();
//         return false;
//     }
//     name.style.backgroundColor = 'green';

//     if(age.value.length == 0)
//     {
//         age.style.backgroundColor = 'red';
//         age.title = "Please enter age";
//         return false;
//     }
//     if(cnic.value.length == 0)
//     {
//         cnic.style.backgroundColor = 'red';
//         cnic.title = "Please enter age";
//         return false;
//     }
//     // name.style.backgroundColor = 'green';

// }





// function setPatterns()
// {
//     var name = document.getElementById('name');
//     name.pattern = "([A-z\s]){2,}";
//     name.title = 'Alphabets only';
// }

// function checkForm()
// {
//     // var patternName = "[a-zA-Z][a-zA-Z\s]*";
//     // var patternName = /^\s][A-z\s]+/;
//     var name = document.getElementById('name');
//     // name.pattern = "([A-z\s]){2,}";
//     // name.title = 'Alphabets only';
//     // console.log(name.pattern);
//     // var age = document.getElementById('age');
//     // var cnic = document.getElementById('cnic');
//     // if (name.value.length == 0 || name.value == null || name.value !=  )
//     if (name.length == 0)
//     {
//         console.log(name.value);
//         return false;
//         }
//     // else
//     //     console.log('ok');
// }



// to-do list
// function addItem()
// {
//     var userInput = document.getElementById('userInput');
//     var u = document.getElementById('myList');
//     var li = document.createElement('LI');
//     var liValue = document.createTextNode(userInput.value);
//     u.appendChild(li);
//     li.appendChild(liValue);
//     userInput.value = '';
// }
