/**
 * Clase que maneja la vista de la aplicación Rick and Morty.
 */
class RickAndMortyView {
  /**
   * Crea una instancia de RickAndMortyView.
   */
  constructor() {
    /** @type {HTMLElement} El elemento raíz de la aplicación. */
    this.app = document.getElementById('app');
  }

  /**
   * Renderiza una lista de personajes en la vista.
   * @param {Array} characters - Lista de objetos de personajes a renderizar.
   */
  renderCharacters(characters) {
    const characterHTML = characters.map(character => `
      <div class="character-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Especie: ${character.species}</p>
      </div>
    `).join('');
    
    this.app.innerHTML = `
      <div class="characters-container">${characterHTML}</div>
    `;
  }

  /**
   * Muestra un mensaje de error en la vista.
   * @param {string} message - El mensaje de error a mostrar.
   */
  showError(message) {
    this.app.innerHTML = `<p>Error: ${message}</p>`;
  }

  /**
   * Renderiza los controles de paginación.
   * @param {number} page - El número de página actual.
   */
  renderPagination(page) {
    this.app.insertAdjacentHTML('beforeend', `
      <div class="pagination">
        <button id="prevPage" ${page === 1 ? 'disabled' : ''}>Anterior</button>
        <button id="nextPage">Siguiente</button>
      </div>
    `);
  }
}

export { RickAndMortyView };
