/* eslint-disable linebreak-style */
import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {

  #ingredients;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */
  constructor(name, brand, price, gender, ingredients) {
    super(name, brand, price, gender);
    this.#setIngredients(ingredients);
  }

  /**
   * @type {Array}
   */
  get ingredients() {
    return this.#ingredients.slice();
  }

  // calcium,fluorid
  #setIngredients(ingr) {
    if (!Array.isArray(ingr) || ingr.length < 1) {
      throw new Error('Ingredients should be array of at least one element.');
    }
    this.#ingredients = ingr;
  }

}
