
var search = document.getElementById('search');
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
// var submitForm  = document.getElementById('searchForm');
// console.log(submitForm);
function searchRecipe() {
    console.log(search.value);
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
    fetch(api2) 
        .then(res => res.json())
        .then(function (data) {

            const recipesArr = data.meals;
            console.log(data.meals);
            row1.innerHTML = '';
            row2.innerHTML = '';
            for (let i = 0; i < recipesArr.length; i++) {
                var div = document.createElement('div');
                div.className = 'box';
                var img = document.createElement('img');
                img.className = 'img-fluid';
                img.src = recipesArr[i].strMealThumb;
                div.appendChild(img);
                var imgTitleDiv = document.createElement('div');
                imgTitleDiv.className = 'img-title-div';
                imgTitleDiv.setAttribute('id', recipesArr[i].idMeal)
                var imgTitle = document.createElement('h3');
                imgTitle.className = 'img-title';
                var imgT_text = document.createTextNode(recipesArr[i].strMeal);
                imgTitle.appendChild(imgT_text);
                imgTitleDiv.appendChild(imgTitle);
                div.appendChild(imgTitleDiv);
                row1.appendChild(div);
                
            }
        })
        .catch(function (error) {
            console.log(error)
        });
    search.value = '';
}

function showRandom()
{
    var api = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(api)
    .then(res => res.json())
    .then(function (data)
    {
        search.value = '';
        row1.innerHTML = '';
        row2.innerHTML = '';
        const recipes = data.meals;

        var mainDiv = document.createElement('div');
        mainDiv.className = 'randomRecipe';

        // add recipe name
        var h = document.createElement('h3');
        h.className = 'randomHeading';
        var hText = document.createTextNode(recipes[0].strMeal);
        h.appendChild(hText);
        mainDiv.appendChild(h);

        // add image
        var imgDiv = document.createElement('div');
        imgDiv.className = 'randomImg-div';
        var img = document.createElement('img');
        img.className = 'randomImg';
        img.src = recipes[0].strMealThumb;
        imgDiv.appendChild(img);
        mainDiv.appendChild(imgDiv);

        // add sub-heading
        var subHeading = document.createElement('div');
        subHeading.className = 'dashed';
        var cat = document.createElement('h6');
        cat.style.marginBottom = '15px';
        var catText = document.createTextNode(recipes[0].strCategory);
        var area = document.createElement('h6');
        var areaText = document.createTextNode(recipes[0].strArea);
        cat.appendChild(catText);
        subHeading.appendChild(cat);
        area.appendChild(areaText);
        subHeading.appendChild(area);
        mainDiv.appendChild(subHeading);

        // add instructions
        var ins = document.createElement('p');
        ins.className = 'instructions';
        var insText = document.createTextNode(recipes[0].strInstructions);
        ins.appendChild(insText);
        mainDiv.appendChild(ins);

        // add ingredients heading
        var ingrDiv = document.createElement('div');
        ingrDiv.className = 'ingrDiv';
        var ingrHeading = document.createElement('h4');
        ingrHeading.className = 'ingrHeading';
        var ingrH_text = document.createTextNode('Ingredients');
        ingrHeading.appendChild(ingrH_text);
        ingrDiv.appendChild(ingrHeading);

        // create array for recipes[0].strIngredients1,2,... (which are object properties in the array element)
        var meal = recipes[0];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredients.push(
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          } 
          else {
            break;
          }
        }  

        // add ingredient elements
        for (let j=0; j<ingredients.length; j++)
        {
            var ingrElement = document.createElement('p');
            ingrElement.className = 'ingredients';
            var ingrE_text = document.createTextNode(ingredients[j]);
            ingrElement.appendChild(ingrE_text);
            ingrDiv.appendChild(ingrElement);
        }
        mainDiv.appendChild(ingrDiv);
      
        // add all to html
        row2.appendChild(mainDiv);
    })
    .catch(function (error)
    {
        console.log(error)
    })
}

// submitForm.addEventListener('submit', searchRecipe);