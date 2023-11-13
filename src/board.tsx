import Cell from "./cell";
import { useState } from "react";
const Board = () => {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  function doMove(id: number) {
    if (isPlayerTurn) {
      if (board[id] != "o") {
        const tempBoard = board;
        tempBoard[id] = "o";
        setBoard(tempBoard);
        setIsPlayerTurn(!isPlayerTurn);
      }
    }
  }
  return (
    <section>
      <p className="text-2xl text-white mb-2 text-center">{`${
        isPlayerTurn ? "🤓" : "🤖"
      } turn`}</p>
      <div className="grid grid-cols-3  max-w-screen-md mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Cell id={index - 1} value={board[index - 1]} doMove ={doMove} />
        ))}
      </div>
    </section>
  );
};

export default Board;
