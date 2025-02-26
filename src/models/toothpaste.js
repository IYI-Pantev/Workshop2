/* eslint-disable linebreak-style */
import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */
  constructor(name, brand, price, gender, ingredients) {
    throw new Error("Not implemented!");
  }
}