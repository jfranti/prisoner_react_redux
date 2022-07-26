/* eslint-disable import/no-anonymous-default-export */
import axios from "../axiosWrapper";
import {
  //   QueryDrawCardRequest,
  ShuffleDeckRequest,
  ShuffleDeckResponse,
  DrawCardRequest,
  DrawCardResponse,
} from "./types";

const shuffleDeck = async (
  deck_count: number = 1
): Promise<ShuffleDeckResponse> => {
  //   const endpoint = config.env.endpoints.v1.deckOfCard.shuffleDeck;
  const endpoint = "https://deckofcardsapi.com/api/deck/new/shuffle/";

  const params: ShuffleDeckRequest = {
    /**
     * Deck count defaults to 1 at the API
     */
    deck_count,
  };

  let response;

  response = await axios.post(endpoint, {
    data: {
      ...params,
    },
  });

  return response;
};

const drawCards = async (
  params: DrawCardRequest
): Promise<DrawCardResponse> => {
  const { deck_id, count } = params;
  const endpoint = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/count=${count}`;

  let response;

  response = await axios.get(endpoint, params);

  return response;
};

export default {
  shuffleDeck,
  drawCards
};
