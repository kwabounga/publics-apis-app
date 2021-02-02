import createSingleton from "@peterbee/react-singleton";

// récupération des textes ds les contantes
import { cst } from "./const";
const locales = cst.locales;

/**
 * Class / Singleton pour les tests de langue et recupération de la locale
 */
export class Locales {
  // Constructeur
  constructor() {
    /**
     * isFR
     *
     * @public
     * @var {Boolean}
     */
    this.isFR = true;

    /**
     * deviceLanguage
     *
     * @public
     * @var {String}
     */
    this.deviceLanguage = Locales.LANGUAGE_FR;

    /**
     * locales
     *
     * @public
     * @var {Object}
     */
    this.locales = locales[this.deviceLanguage];

    /**
     * set langue FR et _update
     *
     * @public
     * @function
     */
    this.setFR = function () {
      this.deviceLanguage = Locales.LANGUAGE_FR;
      this._update();
    };

    /**
     * set langueEN et _update
     *
     * @public
     * @function
     */
    this.setEN = function () {
      this.deviceLanguage = Locales.LANGUAGE_EN;
      this._update();
    };

    /**
     * maj la langue et le singleton useLocale
     *
     * @private
     * @function
     */
    this._update = function () {
      this.locales = locales[this.deviceLanguage];
      this.isFR = (this.deviceLanguage === Locales.LANGUAGE_FR);
      setLocale(Locales.instance.locales);
    };
  }
  /**
   * langue FR
   *
   * @public
   * @static
   * @constant {String}
   */
  static LANGUAGE_FR = "fr_FR";
  /**
   * langue EN
   *
   * @public
   * @static
   * @constant {String}
   */
  static LANGUAGE_EN = "en_US";
  /**
   * Singleton instance de Locales
   *
   * @public
   * @static
   * @var {Object}
   */
  static instance = Locales.instance || new Locales();
}
/**
 * Singleton react  instance de Locales.instance.locales
 *
 * @public
 * @constant {Hook}
 */
// Singleton à utiliser pour les textes
export const [useLocale, setLocale] = createSingleton(Locales.instance.locales);
