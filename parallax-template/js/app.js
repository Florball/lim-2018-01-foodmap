// select
const districtSelect = document.getElementById('district-select');
// input
const searchRestaurant = document.getElementById('icon_prefix');
// Boton para buscar
const search = document.getElementById('search');
//Contenedor de restaurantes
let containerOfRestaurant = document.getElementById('list-of-restaurants')

//falta agregar foto de restaurante
// Restaurante por distrito
const getRestaurant = (value) => {
  containerOfRestaurant.innerHTML='';
  for (let key of restaurants) {
    if (key.district === value) {
      // Contenido pintado
    containerOfRestaurant.innerHTML += `<div class="col center s12">
    <ul>
      <li>${key.name}</li>
    </ul>
  </div>`;
    }; 
  };
};

// Evento select
districtSelect.addEventListener('change', (e) => {
  getRestaurant(e.target.value);
});

// Evento keyup 
searchRestaurant.addEventListener('keyup', (e) => { // El evento keyup en un addevEventListener ocurre cuando el usuario suelta una tecla (en el teclado)
  getRestaurant(event.target.value); 
});