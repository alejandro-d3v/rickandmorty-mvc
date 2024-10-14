/**
 * Clase que maneja las operaciones de datos para la aplicación Rick and Morty.
 */
class RickAndMortyModel {
  /**
   * Crea una instancia de RickAndMortyModel.
   * @param {string} apiUrl - La URL base de la API de Rick and Morty.
   */
  constructor(apiUrl) {
    /** @type {string} La URL base de la API. */
    this.apiUrl = apiUrl;
  }

  /**
   * Obtiene los personajes de una página específica de la API.
   * @param {number} [page=1] - El número de página a obtener.
   * @returns {Promise<Array>} Una promesa que resuelve a un array de personajes.
   * @throws {Error} Si hay un problema al obtener los datos de la API.
   */
  async fetchCharacters(page = 1) {
    try {
      const response = await fetch(`${this.apiUrl}?page=${page}`);
      if (!response.ok) throw new Error('Error al obtener datos de personajes');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { RickAndMortyModel };
