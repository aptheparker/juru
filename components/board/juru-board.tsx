import { useState } from "react";

export default function JuruBoard(prop: { numOfPlayers: number }) {
  const [position, setPosition] = useState(0);
  const [diceRoll, setDiceRoll] = useState(0);

  const handleRollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    setPosition((prevPosition) => (prevPosition + roll) % 36);
  };

  const boardPositions = Array.from({ length: 36 }, (_, index) => index);

  const renderPlayerMarker = (index: number) => {
    if (index === position) {
      return <div className="w-4 h-4 bg-black rounded-full"></div>;
    }
    return null;
  };

  return (
    <div className="bg-green-600 w-11/12 h-5/6 grid grid-cols-12 grid-rows-8 gap-1 p-1">
      {/* Top Row */}
      <div className="col-span-1 row-span-1 bg-blue-500">
        {boardPositions.slice(0, 1).map((index) => (
          <div key={index} className="flex-1 flex justify-center items-center">
            Start
            {renderPlayerMarker(index)}
          </div>
        ))}
      </div>
      <div className="col-span-10 bg-red-500 flex">
        {boardPositions.slice(1, 11).map((index) => (
          <div
            key={index}
            className="flex-1 border border-black flex justify-center items-center"
          >
            {renderPlayerMarker(index)}
          </div>
        ))}
      </div>
      <div className="col-span-1 row-span-1 bg-blue-500">
        {boardPositions.slice(11, 12).map((index) => (
          <div key={index} className="flex-1 flex justify-center items-center">
            Jail
            {renderPlayerMarker(index)}
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
              className="flex-1 border border-black flex justify-center items-center"
            >
              {renderPlayerMarker(index)}
            </div>
          ))}
      </div>

      {/* Center */}
      <div className="col-span-10 row-span-6 bg-white flex justify-center items-center">
        <button
          onClick={handleRollDice}
          className="p-2 bg-blue-700 text-white rounded"
        >
          Roll Dice (Roll: {diceRoll})
        </button>
      </div>

      {/* Right Column */}
      <div className="row-span-6 bg-red-500 flex flex-col">
        {boardPositions.slice(12, 18).map((index) => (
          <div
            key={index}
            className="flex-1 border border-black flex justify-center items-center"
          >
            {renderPlayerMarker(index)}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="col-span-1 row-span-1 bg-blue-500">
        {boardPositions.slice(29, 30).map((index) => (
          <div key={index} className="flex-1 flex justify-center items-center">
            Free Parking
            {renderPlayerMarker(index)}
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
              className="flex-1 border border-black flex justify-center items-center"
            >
              {renderPlayerMarker(index)}
            </div>
          ))}
      </div>
      <div className="col-span-1 row-span-1 bg-blue-500">
        {boardPositions.slice(18, 19).map((index) => (
          <div key={index} className="flex-1 flex justify-center items-center">
            Go To Jail
            {renderPlayerMarker(index)}
          </div>
        ))}
      </div>
    </div>
  );
}
