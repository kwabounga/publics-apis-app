import { cst } from "exports/const";
const baseUrl = cst.urls.api.publicApisBaseUrl;
const translateApi = cst.urls.api.translateApi;

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
    const key = '017a9b928cmsh5632868675b295cp119a9djsnb16c0ccc86b2';
    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI,
      "x-rapidapi-host": "YandexTranslatezakutynskyV1.p.rapidapi.com"
    };
    const postOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify( {
        apiKey: key,
        lang: "fr",
        text: text
        }),
    };
    return fetch(`${translateApi}`, postOptions);
  },
};
