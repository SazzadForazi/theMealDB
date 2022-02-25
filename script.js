
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
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
       </div>
        `;
        searchResult.appendChild(div)
    });

}

// dataLoad()