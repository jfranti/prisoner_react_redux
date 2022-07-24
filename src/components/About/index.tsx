import React, { useState } from "react";
import Links from "../Links";
import DeckOfCardsAPI from "../../api/DeckOfCards";

const links: string[] = [
  "http://www.google.com",
  "http://www.cnn.com",
  "https://www.twitter.com",
];

function About() {
  const [deck_id, setDeckId] = useState("");
  async function handleClickShuffleCards(): Promise<void> {
    const response = await DeckOfCardsAPI.shuffleDeck();
    setDeckId(response.deck_id);
  }
  return (
    <div>
      <div>
        <button onClick={() => handleClickShuffleCards()}>
          Click to Shuffle Cards
        </button>
      </div>
      <h3>Deck Id: {deck_id}</h3>
      <div>
        <button>Draw a card</button>
      </div>
      <h2>Shuffle Some Cards</h2>
      <Links links={links} />
    </div>
  );
}

export default About;
