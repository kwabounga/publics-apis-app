import { cst } from "exports/const";
const baseUrl = cst.urls.api.publicApisBaseUrl;
const frenglyUrl = cst.urls.api.frengly;

export const ApiLoader = {
  /**
   * Vérifie la disponibilité de l'api
   *
   * @function
   * @return {Promise}
   */
  Health: function () {
    const headers = {
      // eslint-disable-next-line
      "Access-Control-Request-Headers": "Content-Type",
      // eslint-disable-next-line
      "Access-Control-Request-Headers": "accept, content-type",
      "Access-Control-Request-Method": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
    };
    const options = {
      method: "GET",
      headers: headers,
    };
    return fetch(`${baseUrl}/health`, options);
  },
  /**
   * Récupere toutes les catégories
   *
   * @function
   * @return {Promise}
   */
  Categories: function () {
    return fetch(`${baseUrl}/categories`);
  },
  /**
   * Récupere toutes les catégories
   *
   * @function
   * @param {String} - la catégorie
   * @return {Promise}
   */
  SelectedCategory: function (cat) {
    return fetch(`${baseUrl}/entries?category=${cat}`);
  },
  /**
   * Récupere toutes les apis disponibles
   *
   * @function
   * @return {Promise}
   */
  AllApis: function () {
    return fetch(`${baseUrl}/entries`);
  },
  /**
   * Récupère une api aléatoirement
   *
   * @function
   * @return {Promise}
   */
  Random: function () {
    return fetch(`${baseUrl}/random`);
  },
  /**
   * Traduis les textes en en fr
   *
   * @function
   * @param {String} - le text en EN
   * @return {Promise} - le texte en FR
   */
  Translate: function (text) {
    const headers = {
      // eslint-disable-next-line
      "Access-Control-Request-Headers": "Content-Type",
      // eslint-disable-next-line
      "Access-Control-Request-Headers": "accept, content-type",
      "Access-Control-Request-Method": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      "Content-Type": "application/json;charset=UTF-8",
    };
    const postOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        src: "en",
        dest: "fr",
        text: text,
        email: "jeanyves.chaillou@gmail.com",
        password: "le_mot_de_passe",
      }),
    };
    return fetch(`${frenglyUrl}`, postOptions);
  },
};
