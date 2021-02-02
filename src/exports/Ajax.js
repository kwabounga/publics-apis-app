/**
 * appel ajax vanillaJs
 * @function
 */
export const AjaxGet = function (url, successCallBack, errorCallBack) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      // console.log( url + ' ...loaded' );
      // Appelle la fonction callback en lui passant la réponse de la requête
      successCallBack(req.responseText);
    } else {
      console.log(req.status + " " + req.statusText + " " + url);
      errorCallBack(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.log("Erreur réseau avec l'URL " + url);
    errorCallBack("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
};
