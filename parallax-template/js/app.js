// select
const districtSelect = document.getElementById('district-select');
// input
const searchRestaurant = document.getElementById('icon_prefix');
// Boton para buscar
const search = document.getElementById('search');
//Contenedor de restaurantes

let containerOfRestaurant = document.getElementById('list-of-restaurants')
//falta agregar foto de restaurante
// Recorrer
const getRestaurant = (value) => {
  containerOfRestaurant.innerHTML='';
  for (let restaurant of restaurants) {
    if (restaurant.district === value) {
      // Contenido pintado
    containerOfRestaurant.innerHTML += `<div class="col center s12">
    <ul>
      <li>${restaurant.name}</li>
    </ul>
  </div>`;
    }; 
  };
};

// Filtra por select
districtSelect.addEventListener('change', (e) => {
  getRestaurant(e.target.value)
});




//  const list = restaurantesBarranquinos.filter((barranco) => {
//   let nombre = barranco.name.toUpperCase();
//   nombre = nombre.indexOf(search.toUpperCase()) + 1;
//   return nombre;
// });
// //  funcion de evento keyup para filtrar
// searchRestaurant.addEventListener('keyup', (event) => { // El evento keyup en un addevEventListener ocurre cuando el usuario suelta una tecla (en el teclado)
//   filter(event.target.value); 
// });