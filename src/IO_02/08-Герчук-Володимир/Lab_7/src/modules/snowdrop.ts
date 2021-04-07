/** @module snowdrop */
import Flower from './flower.js';

/**
 * Class representing a peony.
 * @extends Flower
 */
export default class Snowdrop extends Flower {
  static readonly K = 4.5;

  /**
   * Create a Snowdrop.
   * @param {Number} len length.
   * @param {String} color color.
   * @param {Number} freshness level of freshness.
   */
  constructor(len: number, color: string, freshness: string) {
    super(len,  color, freshness, Snowdrop.K);
  }
}