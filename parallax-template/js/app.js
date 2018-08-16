// input
const searchRestaurant = document.getElementById('icon_prefix');
// Boton para buscar
let search = document.getElementById('search');
// Contenedor de restaurantes
let containerOfRestaurant = document.getElementById('list-of-restaurants');

// escuchando evento click
// search.addEventListener('click', searchOfRestaurants);

// Recorrer
let tourRestaurant = '';
let restaurantFilter = () => {
  for (let restaurant of restaurants) {
console.log(restaurant);
  
    // tourRestaurant += restaurant + ': ' + restaurants[restaurant];
    // tourRestaurant += '<br>';
  }
  console.log(tourRestaurant);
};
restaurantFilter();

// Contenido pintado
containerOfRestaurant.innerHTML = `<div class="col center s12">
<ul>
  <li>
    <a class="" href="#!">Link 1</a>
  </li>
  <li>
    <a class="" href="#!">Link 2</a>
  </li>
  <li>
    <a class="" href="#!">Link 3</a>
  </li>
  <li>
    <a class="" href="#!">Link 4</a>
  </li>
</ul>
</div>`;
