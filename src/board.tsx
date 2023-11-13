import Cell from "./cell";
const Board = () => {
  return (
    <div className="grid grid-cols-3  max-w-screen-md mx-auto">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <Cell id={index} />
      ))}
    </div>
  );
};

export default Board;
