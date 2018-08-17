//Elementos select, input, contenedor de restaurantes Y contenedor de mapa
const districtSelect = document.getElementById('district-select');
const searchRestaurant = document.getElementById('icon_prefix');
const containerOfRestaurant = document.getElementById('list-of-restaurants');
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
  // Esconde mapa
  containerMap.classList.replace('show', 'hide');
});

// Evento keyup en input, seleciona por nombre de restaurante o por distrito
searchRestaurant.addEventListener('keyup', (e) => {
  getRestaurant(e.target.value.toUpperCase());
  // Esconde mapa
  containerMap.classList.replace('show', 'hide'); 
});

// // Evento click en restaurante, muestra modal 
// restaurantName.addEventListener('click', () => {
//   document.getElementById('modal1').classList.add('modal');
// });
