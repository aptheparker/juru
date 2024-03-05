import Button from "../ui/button";

export default function PlayerCard(prop: {
  numOfPlayers: number;
  addNumOfPlayers: () => void;
  removeNumOfPlayers: () => void;
  confirmNumOfPlayers: () => void;
}) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg space-y-4 w-96 border border-black">
      <h1>Number of players: {prop.numOfPlayers}</h1>
      <div className="flex justify-between">
        <Button onClick={prop.addNumOfPlayers} width="45%" height="40px">
          Add player
        </Button>
        <Button onClick={prop.removeNumOfPlayers} width="45%" height="40px">
          Remove player
        </Button>
      </div>
      <Button onClick={prop.confirmNumOfPlayers}>Confirm</Button>
    </div>
  );
}
