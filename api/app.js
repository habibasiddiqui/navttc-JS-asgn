
var search = document.getElementById('search');

function searchRecipe() {
    console.log(search.value);
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
    // console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
        .then(res => res.json())
        .then(function (data) {
            // Your code for handling the data you get from the API
            console.log(data.meals)
            const recipesArr = data.meals;

            var row = document.getElementById('row');

            for (let i = 0; i < recipesArr.length; i++) {
                var div = document.createElement('div');
                div.className = 'box';
                var img = document.createElement('img');
                // img.classList.add('thumbnail', 'img-fluid');
                img.className = 'img-fluid';
                img.src = recipesArr[i].strMealThumb;
                div.appendChild(img);
                // var imgTitle = document.createElement('h6');
                // imgTitle = document.createTextNode(recipesArr[i].strMeal);
                // imgTitle.className = 'center';
                // img.setAttribute('onmouseover', 'thumbTitle(this); ');
                // img.appendChild(imgTitle);
                row.appendChild(div);

            }

        })
        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(error)
        });
    search.value = '';
}

// function thumbTitle(e)
// {
//     e.classList.add( 'thumbnail:hover');
//     console.log(e);
//     var t = document.createElement('h6');
//     t = document.createTextNode("Heading");
//     t.className = 'center';
//     var p = e.parentNode;
//     // var secondChld = p.childNodes[0];
//     // var secondChld = 
//     p.childNodes[1] = t;  
//     console.log(p, t);

//     // p.appendChild(t);
// }



function showRandom()
{
    var api = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(api)
    .then(res => res.json())
    .then(function (data)
    {
        console.log(data);

        var row = document.getElementById('row');
        row.innerHTML = '';
        var recipe = data.meals;

        var div = document.createElement('div');
        div.style.margin = 'auto';

        var h = document.createElement('h1');
        var hText = document.createTextNode(recipe[0].strMeal);
        h.appendChild(hText);
        div.appendChild(h);

        var img = document.createElement('img');
        img.src = recipe[0].strMealThumb;
        div.appendChild(img);

        // var cat = 

        row.appendChild(div);
        // console.log(div, h, hText);


    })
    .catch(function (error)
    {
        console.log(error)
    })
    search.value = '';
}