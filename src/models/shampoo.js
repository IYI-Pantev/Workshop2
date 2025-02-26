import { Product } from './product.js';
import { Usage } from './usage.js';
import { Gender } from './gender.js';

export class Shampoo extends Product {
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */
  constructor(name, brand, price, gender, milliliters, usage) {
    throw new Error("Not implemented!");
  }
}