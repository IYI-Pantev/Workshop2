/* eslint-disable linebreak-style */
import { Product } from './product.js';
import { Usage } from './usage.js';
import { Gender } from './gender.js';

export class Shampoo extends Product {

  static #minMilliliters = 0;
  #milliliters;
  #usage;
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */
  constructor(name, brand, price, gender, milliliters, usage) {
    super(name, brand, price, gender);
    this.#setMilliliters(milliliters);
    this.#setUsage(usage);
  }

  /**
   * @type {number}
   */
  get milliliters() {
    return this.#milliliters;
  }

  #setMilliliters(mls) {
    if (typeof mls !== 'number' || !Number.isFinite(mls)) {
      throw new Error('Invalid number for milliliters.');
    }
    if (mls < Shampoo.milliliters) {
      throw new Error('Only non negative values allowed.');
    }
    this.#milliliters = mls;
  }

  /**
   * @type {string}
   */
  get usage() {
    this.#usage;
  }

  #setUsage(usg) {
    if (typeof usg !== 'string' || !Object.values(Usage).includes(usg)) {
      throw new Error('Invalid usage text.');
    }
    this.#usage = usg;
  }

}
