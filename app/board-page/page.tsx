"use client";

import PlayerCard from "@/components/card/player-card";
import { useState, useEffect } from "react";

export default function BoardPage() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [numOfPlayers, setNumOfPlayers] = useState(0);

  function addNumOfPlayers() {
    if (numOfPlayers >= 4) return;
    setNumOfPlayers(numOfPlayers + 1);
  }

  function removeNumOfPlayers() {
    if (numOfPlayers <= 0) return;
    setNumOfPlayers(numOfPlayers - 1);
  }

  function handleConfirm() {
    setIsFirstRender(false);
    console.log(numOfPlayers);
  }

  return (
    <div className="text-center w-full h-full flex flex-col items-center justify-center">
      {isFirstRender && (
        <PlayerCard
          numOfPlayers={numOfPlayers}
          addNumOfPlayers={addNumOfPlayers}
          removeNumOfPlayers={removeNumOfPlayers}
          confirmNumOfPlayers={handleConfirm}
        />
      )}
      <h1>Board Page</h1>
      <p>Number of players: {numOfPlayers}</p>
      <div className="bg-green-600 w-5/6 h-5/6"/>
    </div>
  );
}
