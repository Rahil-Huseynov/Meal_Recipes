const title = document.getElementById('title')
const image = document.getElementById('image')
const ingredients = document.getElementById('ingredients')
const ingredients_list = document.getElementById('ingredients_list')
const video = document.getElementById('video')
const button = document.getElementById('button')
const ingredients_p = document.getElementById('ingredients_p')
const ingredients_product_partition = document.getElementById('ingredients_product_partition')
const input_search = document.getElementById('input_search')

input_search.onkeydown = (e) => {

    if (e.key === 'Enter') {

        ingredients_func();

    }
};


const ingredients_random_func = async () => {
    const ingredients_api = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

    const ingredients_api_data = await ingredients_api.json();

    if (ingredients_api.status === 200) {
        const meal = ingredients_api_data.meals[0];
        title.innerHTML = meal.strMeal;
        image.src = meal.strMealThumb;

        const ingredients_product1 = document.getElementById('ingredients_product1')
        const ingredients_product2 = document.getElementById('ingredients_product2')
        const ingredients_product3 = document.getElementById('ingredients_product3')
        const ingredients_product4 = document.getElementById('ingredients_product4')
        const ingredients_product5 = document.getElementById('ingredients_product5')
        const ingredients_product6 = document.getElementById('ingredients_product6')
        const ingredients_product7 = document.getElementById('ingredients_product7')
        const ingredients_product8 = document.getElementById('ingredients_product8')
        const ingredients_product9 = document.getElementById('ingredients_product9')
        const ingredients_product10 = document.getElementById('ingredients_product10')
        const ingredients_product11 = document.getElementById('ingredients_product11')
        const ingredients_product12 = document.getElementById('ingredients_product12')
        const ingredients_product13 = document.getElementById('ingredients_product13')
        const ingredients_product14 = document.getElementById('ingredients_product14')
        const ingredients_product15 = document.getElementById('ingredients_product15')
        const ingredients_product16 = document.getElementById('ingredients_product16')
        const ingredients_product17 = document.getElementById('ingredients_product17')
        const ingredients_product18 = document.getElementById('ingredients_product18')
        const ingredients_product19 = document.getElementById('ingredients_product19')
        const ingredients_product20 = document.getElementById('ingredients_product20')


        ingredients_p.style.display = 'block'

        if (meal.strIngredient1) {
            ingredients_product1.innerHTML = `${meal.strIngredient1}: ${meal.strMeasure1}`
        }
        if (meal.strIngredient2) {
            ingredients_product2.innerHTML = `${meal.strIngredient2}: ${meal.strMeasure2}`
        }
        if (meal.strIngredient3) {
            ingredients_product3.innerHTML = `${meal.strIngredient3}: ${meal.strMeasure3}`
        }
        if (meal.strIngredient4) {
            ingredients_product4.innerHTML = `${meal.strIngredient4}: ${meal.strMeasure4}`
        }
        if (meal.strIngredient5) {
            ingredients_product5.innerHTML = `${meal.strIngredient5}: ${meal.strMeasure5}`
        }
        if (meal.strIngredient6) {
            ingredients_product6.innerHTML = `${meal.strIngredient6}: ${meal.strMeasure6}`
        }
        if (meal.strIngredient7) {
            ingredients_product7.innerHTML = `${meal.strIngredient7}: ${meal.strMeasure7}`
        }
        if (meal.strIngredient8) {
            ingredients_product8.innerHTML = `${meal.strIngredient8}: ${meal.strMeasure8}`
        }
        if (meal.strIngredient9) {
            ingredients_product9.innerHTML = `${meal.strIngredient9}: ${meal.strMeasure9}`
        }
        if (meal.strIngredient10) {
            ingredients_product10.innerHTML = `${meal.strIngredient10}: ${meal.strMeasure10}`
        }
        if (meal.strIngredient11) {
            ingredients_product11.innerHTML = `${meal.strIngredient11}: ${meal.strMeasure11}`
            ingredients_product_partition.style.display = 'flex'
        }
        if (meal.strIngredient12) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product12.innerHTML = `${meal.strIngredient12}: ${meal.strMeasure12}`
        }
        if (meal.strIngredient13) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product13.innerHTML = `${meal.strIngredient13}: ${meal.strMeasure13}`
        }
        if (meal.strIngredient14) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product14.innerHTML = `${meal.strIngredient14}: ${meal.strMeasure14}`
        }
        if (meal.strIngredient15) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product15.innerHTML = `${meal.strIngredient15}: ${meal.strMeasure15}`
        }
        if (meal.strIngredient16) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product16.innerHTML = `${meal.strIngredient16}: ${meal.strMeasure16}`
        }
        if (meal.strIngredient17) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product17.innerHTML = `${meal.strIngredient17}: ${meal.strMeasure17}`
        }
        if (meal.strIngredient18) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product18.innerHTML = `${meal.strIngredient18}: ${meal.strMeasure18}`
        }
        if (meal.strIngredient19) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product19.innerHTML = `${meal.strIngredient19}: ${meal.strMeasure19}`
        }
        if (meal.strIngredient20) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product20.innerHTML = `${meal.strIngredient20}: ${meal.strMeasure20}`
        }




        video.src = `https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`;




    }
}

ingredients_random_func()







const ingredients_func = async () => {
    const input_search_value = document.getElementById('input_search').value

    const ingredients_api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + input_search_value);

    const ingredients_api_data = await ingredients_api.json();

    if (ingredients_api.status === 200) {
        const meal = ingredients_api_data.meals[0];
        title.innerHTML = meal.strMeal;
        image.src = meal.strMealThumb;

        const ingredients_product1 = document.getElementById('ingredients_product1')
        const ingredients_product2 = document.getElementById('ingredients_product2')
        const ingredients_product3 = document.getElementById('ingredients_product3')
        const ingredients_product4 = document.getElementById('ingredients_product4')
        const ingredients_product5 = document.getElementById('ingredients_product5')
        const ingredients_product6 = document.getElementById('ingredients_product6')
        const ingredients_product7 = document.getElementById('ingredients_product7')
        const ingredients_product8 = document.getElementById('ingredients_product8')
        const ingredients_product9 = document.getElementById('ingredients_product9')
        const ingredients_product10 = document.getElementById('ingredients_product10')
        const ingredients_product11 = document.getElementById('ingredients_product11')
        const ingredients_product12 = document.getElementById('ingredients_product12')
        const ingredients_product13 = document.getElementById('ingredients_product13')
        const ingredients_product14 = document.getElementById('ingredients_product14')
        const ingredients_product15 = document.getElementById('ingredients_product15')
        const ingredients_product16 = document.getElementById('ingredients_product16')
        const ingredients_product17 = document.getElementById('ingredients_product17')
        const ingredients_product18 = document.getElementById('ingredients_product18')
        const ingredients_product19 = document.getElementById('ingredients_product19')
        const ingredients_product20 = document.getElementById('ingredients_product20')


        ingredients_p.style.display = 'block'

        if (meal.strIngredient1) {
            ingredients_product1.innerHTML = `${meal.strIngredient1}: ${meal.strMeasure1}`
        }
        if (meal.strIngredient2) {
            ingredients_product2.innerHTML = `${meal.strIngredient2}: ${meal.strMeasure2}`
        }
        if (meal.strIngredient3) {
            ingredients_product3.innerHTML = `${meal.strIngredient3}: ${meal.strMeasure3}`
        }
        if (meal.strIngredient4) {
            ingredients_product4.innerHTML = `${meal.strIngredient4}: ${meal.strMeasure4}`
        }
        if (meal.strIngredient5) {
            ingredients_product5.innerHTML = `${meal.strIngredient5}: ${meal.strMeasure5}`
        }
        if (meal.strIngredient6) {
            ingredients_product6.innerHTML = `${meal.strIngredient6}: ${meal.strMeasure6}`
        }
        if (meal.strIngredient7) {
            ingredients_product7.innerHTML = `${meal.strIngredient7}: ${meal.strMeasure7}`
        }
        if (meal.strIngredient8) {
            ingredients_product8.innerHTML = `${meal.strIngredient8}: ${meal.strMeasure8}`
        }
        if (meal.strIngredient9) {
            ingredients_product9.innerHTML = `${meal.strIngredient9}: ${meal.strMeasure9}`
        }
        if (meal.strIngredient10) {
            ingredients_product10.innerHTML = `${meal.strIngredient10}: ${meal.strMeasure10}`
        }
        if (meal.strIngredient11) {
            ingredients_product11.innerHTML = `${meal.strIngredient11}: ${meal.strMeasure11}`
            ingredients_product_partition.style.display = 'flex'
        }
        if (meal.strIngredient12) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product12.innerHTML = `${meal.strIngredient12}: ${meal.strMeasure12}`
        }
        if (meal.strIngredient13) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product13.innerHTML = `${meal.strIngredient13}: ${meal.strMeasure13}`
        }
        if (meal.strIngredient14) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product14.innerHTML = `${meal.strIngredient14}: ${meal.strMeasure14}`
        }
        if (meal.strIngredient15) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product15.innerHTML = `${meal.strIngredient15}: ${meal.strMeasure15}`
        }
        if (meal.strIngredient16) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product16.innerHTML = `${meal.strIngredient16}: ${meal.strMeasure16}`
        }
        if (meal.strIngredient17) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product17.innerHTML = `${meal.strIngredient17}: ${meal.strMeasure17}`
        }
        if (meal.strIngredient18) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product18.innerHTML = `${meal.strIngredient18}: ${meal.strMeasure18}`
        }
        if (meal.strIngredient19) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product19.innerHTML = `${meal.strIngredient19}: ${meal.strMeasure19}`
        }
        if (meal.strIngredient20) {
            ingredients_product_partition.style.display = 'flex'
            ingredients_product20.innerHTML = `${meal.strIngredient20}: ${meal.strMeasure20}`
        }




        video.src = `https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`;




    }   


}
button.addEventListener('click', () => {

    ingredients_func()
})


