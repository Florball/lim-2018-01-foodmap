// select
const districtSelect = document.getElementById('district-select');
// input
const searchRestaurant = document.getElementById('icon_prefix');
// Boton para buscar
const search = document.getElementById('search');
//Contenedor de restaurantes
const containerOfRestaurant = document.getElementById('list-of-restaurants')
// contenedor de mapa
const containerMap = document.getElementById('container-map');

//falta agregar foto de restaurante
// Restaurante por distrito
const getRestaurant = (value) => {
  containerOfRestaurant.innerHTML='';
  for (let key of restaurants) {
    if (key.district === value || key.name === value) {
      // Contenedor de restaurantes
    containerOfRestaurant.innerHTML += `<div class="col center s12">
      <ul>
        <li>${key.name}</li>
      </ul>
    </div>`;
    };
  };
};

// Evento change en select, seleciona por distrito 
districtSelect.addEventListener('change', (e) => {
  getRestaurant(e.target.value);
});

// Evento keyup en input, seleciona por nombre de restaurante o por distrito
searchRestaurant.addEventListener('keyup', (e) => { // El evento keyup en un addevEventListener ocurre cuando el usuario suelta una tecla (en el teclado)
  getRestaurant(event.target.value.toUpperCase()); 
});

// esconder mapa
// if (districtSelect === ) {
//   container.classList.replace('show', 'hide');
// }
