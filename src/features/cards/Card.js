import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCard } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector(selectCard(id)); // replace this with a call to your selector to get a card by id
  console.log(card);
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
