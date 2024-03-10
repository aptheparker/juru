import { useState, useEffect } from "react";
import boardData from "@/data/board.json";

export default function JuruBoard({ numOfPlayers }: { numOfPlayers: number }) {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceRoll, setDiceRoll] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showDiceAnimation, setShowDiceAnimation] = useState(false);

  const playerColors = [
    "bg-black",
    "bg-white",
    "bg-green-500",
    "bg-yellow-500",
  ];
  const initializePlayers = (num: number) =>
    Array.from({ length: num }, (_, index) => ({
      id: index,
      position: 0,
      color: playerColors[index],
    }));
  const [players, setPlayers] = useState(() => initializePlayers(numOfPlayers));

  useEffect(() => {
    setPlayers(initializePlayers(numOfPlayers));
  }, [numOfPlayers]);

  const handleRollDice = () => {
    setIsButtonDisabled(true);
    setShowDiceAnimation(true);
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);

    setTimeout(() => {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) => {
          if (player.id === currentPlayer) {
            return {
              ...player,
              position: (player.position + roll) % 36,
            };
          }
          return player;
        })
      );
      setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % numOfPlayers);
      setIsButtonDisabled(false);
      setShowDiceAnimation(false); // Stop showing the animation
    }, 1000);
  };

  const renderPlayerMarker = (index: number) => {
    return players
      .filter((player) => player.position === index)
      .map((player) => (
        <div
          key={player.id}
          className={`w-4 h-4 ${player.color} rounded-full`}
        ></div>
      ));
  };

  const boardPositions = Array.from(boardData, (_, index) => index);

  return (
    <div className="bg-green-600 w-11/12 h-5/6 grid grid-cols-12 grid-rows-8 gap-1 p-1">
      {/* Top Row */}
      <div className="col-span-1 bg-blue-500 flex">
        {boardPositions.slice(0, 1).map((index) => (
          <div
            key={index}
            className="flex-1 flex flex-col border border-black justify-between items-center"
          >
            {boardData[index].mission}
            <div className="flex">{renderPlayerMarker(index)}</div>
          </div>
        ))}
      </div>
      <div className="col-span-10 bg-red-500 flex">
        {boardPositions.slice(1, 11).map((index) => (
          <div
            key={index}
            className="flex-1 flex flex-col border border-black justify-between items-center"
          >
            {boardData[index].mission}
            <div className="flex">{renderPlayerMarker(index)}</div>
          </div>
        ))}
      </div>
      <div className="col-span-1 bg-blue-500 flex">
        {boardPositions.slice(11, 12).map((index) => (
          <div
            key={index}
            className="flex-1 flex flex-col border border-black justify-between items-center"
          >
            {boardData[index].mission}
            <div className="flex">{renderPlayerMarker(index)}</div>
          </div>
        ))}
      </div>

      {/* Left Column */}
      <div className="row-span-6 bg-red-500 flex flex-col">
        {boardPositions
          .slice(30, 36)
          .reverse()
          .map((index) => (
            <div
              key={index}
              className="flex-1 flex flex-col border border-black justify-between items-center"
            >
              {boardData[index].mission}
              <div className="flex">{renderPlayerMarker(index)}</div>
            </div>
          ))}
      </div>

      {/* Center */}
      <div className="col-span-10 row-span-6 bg-white flex flex-col justify-center items-center">
        {showDiceAnimation ? (
          <div className="dice-animation">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center">
              Rolling...
            </div>
          </div>
        ) : (
          <div>
            <div className="text-3xl font-bold mb-4">Dice Roll: {diceRoll}</div>
            <button
              onClick={handleRollDice}
              disabled={isButtonDisabled}
              className={`p-2 text-white rounded ${
                isButtonDisabled
                  ? "cursor-not-allowed bg-gray-500"
                  : "cursor-pointer bg-blue-700"
              }`}
            >
              <div>Player {currentPlayer + 1}</div>
              Roll Dice
            </button>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="row-span-6 bg-red-500 flex flex-col">
        {boardPositions.slice(12, 18).map((index) => (
          <div
            key={index}
            className="flex-1 flex flex-col border border-black justify-between items-center"
          >
            {boardData[index].mission}
            <div className="flex">{renderPlayerMarker(index)}</div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="col-span-1 bg-blue-500 flex">
        {boardPositions.slice(29, 30).map((index) => (
          <div
            key={index}
            className="flex-1 flex flex-col border border-black justify-between items-center"
          >
            {boardData[index].mission}
            <div className="flex">{renderPlayerMarker(index)}</div>
          </div>
        ))}
      </div>
      <div className="col-span-10 bg-red-500 flex">
        {boardPositions
          .slice(19, 29)
          .reverse()
          .map((index) => (
            <div
              key={index}
              className="flex-1 flex flex-col border border-black justify-between items-center"
            >
              {boardData[index].mission}
              <div className="flex">{renderPlayerMarker(index)}</div>
            </div>
          ))}
      </div>
      <div className="col-span-1 bg-blue-500 flex">
        {boardPositions.slice(18, 19).map((index) => (
          <div
            key={index}
            className="flex-1 flex flex-col border border-black justify-between items-center"
          >
            {boardData[index].mission}
            <div className="flex">{renderPlayerMarker(index)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
