/**
 *
 * @export
 * @interface QueryDrawCardRequest
 */
export interface QueryDrawCardRequest {
  /**
   *
   * @type {string}
   * @memberof QueryDrawCardRequest
   * Blackjack uses 6, API default is 1
   */
  deck_id: string;
  /**
   *
   * @type {number}
   * @memberof QueryDrawCardRequest
   * number of cards to be drawn
   */
  count: number;
}

/**
 *
 * @export
 * @interface ShuffleDeckRequest
 */
export interface ShuffleDeckRequest {
  /**
   * @type {number}
   * @memberof ShuffleDeckRequest
   * Blackjack uses 6, API default is 1
   */
  deck_count: number;
}

/**
 *
 * @export
 * @interface ShuffleDeckResponse
 */
export interface ShuffleDeckResponse {
  /**
   *
   * @type {boolean}
   * @memberof ShuffleDeckResponse
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof ShuffleDeckResponse
   */
  deck_id: string;
  /**
   *
   * @type {boolean}
   * @memberof ShuffleDeckResponse
   */
  shuffled: boolean;
  /**
   *
   * @type {number}
   * @memberof ShuffleDeckResponse
   */
  remaining: number;
}
