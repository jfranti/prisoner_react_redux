/**
 *
 * @export
 * @interface Card
 */
export interface Card {
  /**
   *
   * @type {string}
   * @memberof Card
   * "https://www.deckofcardsapi.com/static/img/KH.png"
   */
  image: string;
  /**
   *
   * @type {string}
   * @memberof Card
   */
  value: string;
  /**
   *
   * @type {string}
   * @memberof Card
   */
  suit: string;
  /**
   *
   * @type {string}
   * @memberof Card
   */
  code: string;
}

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

/**
 *
 * @export
 * @interface DrawCardRequest
 */
export interface DrawCardRequest {
  /**
   *
   * @type {string}
   * @memberof DrawCardRequest
   */
  deck_id: string;
  /**
   *
   * @type {number}
   * @memberof DrawCardRequest
   */
  count: number;
}

/**
   * 
  @export
  @interface DrawCardResponse
   */
export interface DrawCardResponse {
  /**
   *
   * @type {boolean}
   * @memberof DrawCardResponse
   */
  success: boolean;
  /**
   *
   * @type {Card[]}
   * @memberof DrawCardResponse
   */
  cards: Card[];
  /**
   *
   * @type {string}
   * @memberof DrawCardResponse
   */
  deck_id: string;
  /**
   *
   * @type {number}
   * @memberof DrawCardResponse
   */
  remaining: number;
}
