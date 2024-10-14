import { RickAndMortyModel } from '../models/rickAndMortyModel.js';
import { RickAndMortyView } from '../views/rickAndMortyView.js';

/**
 * Controlador principal que coordina el modelo y la vista de la aplicación Rick and Morty.
 */
class MainController {
  /**
   * Crea una instancia de MainController e inicializa la aplicación.
   */
  constructor() {
    /** @type {string} La URL base de la API de Rick and Morty. */
    this.apiUrl = 'https://rickandmortyapi.com/api/character';

    /** @type {RickAndMortyModel} El modelo de datos de la aplicación. */
    this.model = new RickAndMortyModel(this.apiUrl);
    /** @type {RickAndMortyView} La vista de la aplicación. */
    this.view = new RickAndMortyView();

    /** @type {number} La página actual de resultados. */
    this.currentPage = 1;

    this.init();
  }

  /**
   * Inicializa la aplicación cargando los personajes iniciales.
   */
  init() {
    this.loadCharacters(this.currentPage);
  }

  /**
   * Carga los personajes de una página específica y actualiza la vista.
   * @param {number} page - El número de página a cargar.
   */
  async loadCharacters(page) {
    try {
      const characters = await this.model.fetchCharacters(page);
      this.view.renderCharacters(characters);
      this.view.renderPagination(page);

      document.getElementById('prevPage').addEventListener('click', () => this.changePage(-1));
      document.getElementById('nextPage').addEventListener('click', () => this.changePage(1));
    } catch (error) {
      this.view.showError('No se pudieron obtener los datos de los personajes');
    }
  }

  /**
   * Cambia la página actual y carga los nuevos personajes.
   * @param {number} direction - La dirección del cambio de página (-1 para anterior, 1 para siguiente).
   */
  changePage(direction) {
    this.currentPage += direction;
    this.loadCharacters(this.currentPage);
  }
}

// Iniciar la aplicación
window.onload = () => {
  new MainController();
};
