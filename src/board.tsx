import Cell from "./cell";
import { useState } from "react";
type Player = "x" | "o" | "";
const Board = () => {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  function doMove(id: number) {
    if (isPlayerTurn && !isGameOver) {
      if (board[id] != "o" && board[id] != "x") {
        const tempBoard = board;
        tempBoard[id] = "o";
        const result: Player = determineWinner(tempBoard as Player[]);
        if (result == "o") {
          setIsGameOver(true);
        } else if (result == "x") {
          setIsGameOver(true);
        } else if (result == "") {
          setBoard(tempBoard);
          setIsPlayerTurn(!isPlayerTurn);
        }
      }
    }
  }

  function determineWinner(tempBoard: Player[]): Player {
    const winPatterns: number[][] = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        tempBoard[a] &&
        tempBoard[a] === tempBoard[b] &&
        tempBoard[a] === tempBoard[c]
      ) {
        return tempBoard[a];
      }
    }

    return ""; // No winner
  }
  return (
    <section>
      <p className="text-2xl text-white mb-2 text-center">{`${
        isPlayerTurn ? "🤓" : "🤖"
      } ${isGameOver ? "wins" : "turn"}`}</p>
      <div className="grid grid-cols-3  max-w-screen-md mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Cell id={index - 1} value={board[index - 1]} doMove={doMove} />
        ))}
      </div>
    </section>
  );
};

export default Board;
