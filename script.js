
function searchButton() {
    const searchInput = document.getElementById('searchField');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => dataLoad(data.meals))
}
function dataLoad(meals) {
    const searchResult = document.getElementById('mealcard');
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <h5>${meal.strMeal}</h5>
            <p>${meal.strInstructions.slice(0, 100)}</p>
           
       </div>
        `;
        searchResult.appendChild(div)
    });

}
const loadMealDetails = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    const mealsDetails = document.getElementById('mealDetails');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5>${meal.strMeal}</h5>
        <p>${meal.strInstructions.slice(0, 100)}</p>
    `;
    mealsDetails.appendChild(div);
}