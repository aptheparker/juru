"use client";

import PlayerCard from "@/components/card/player-card";
import JuruBoard from "@/components/board/juru-board";
import { useState } from "react";

export default function BoardPage() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [confirmedNumOfPlayers, setConfirmedNumOfPlayers] = useState(0);

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
    setConfirmedNumOfPlayers(numOfPlayers);
  }

  return (
    <div
      className={`text-center w-full h-full flex flex-col items-center justify-center ${
        isFirstRender ? "backdrop-blur-sm bg-white/30" : "bg-green-300"
      }`}
    >
      {isFirstRender && (
        <PlayerCard
          numOfPlayers={numOfPlayers}
          addNumOfPlayers={addNumOfPlayers}
          removeNumOfPlayers={removeNumOfPlayers}
          confirmNumOfPlayers={handleConfirm}
        />
      )}

      <h1 className="text-4xl font-bold">Juru Board Game</h1>
      <p className="text-xl">Number of Players: {confirmedNumOfPlayers}</p>
      <JuruBoard numOfPlayers={confirmedNumOfPlayers} />
    </div>
  );
}
