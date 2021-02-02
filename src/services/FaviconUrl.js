/** 
 * APi google favicon getter 
 */
import { cst } from "exports/const";
/**
 * Récupère le favicon de l'api
 *
 * @function
 * @param {String} - url of api
 * @return {String} - url de l'image favicon 
 */
export const FaviconUrl = function (url) {
  return `${cst.urls.api.favicons}${url}`;
};
