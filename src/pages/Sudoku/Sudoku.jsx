import { useEffect, useState } from "react";
import "./Sudoku.css";
import Button from "../../components/Button/Button";

const Sudoku = () => {
  const [board, setBoard] = useState([]);
  const [boardCheck, setBoardCheck] = useState([]);
  const [isCellCorrect, setIsCellCorrect] = useState([]);

  const fetchBoard = async () => {
    const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
    const data = await response.json();
    setBoard(data.newboard.grids[0].value);
    setBoardCheck(data.newboard.grids[0].solution);
    setIsCellCorrect(
      data.newboard.grids[0].value.map((row) => row.map((cell) => cell !== 0))
    );
  };
  useEffect(() => {
    fetchBoard();
  }, []);
  const handleChange = (rowIndex, colIndex, value) => {
    if (/^[1-9]?$/.test(value)) {
      const newBoard = board.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? value
              ? parseInt(value)
              : 0
            : cell
        )
      );
      const isCorrect = parseInt(value) === boardCheck[rowIndex][colIndex];
      const newIsCorrect = isCellCorrect.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex ? isCorrect : cell
        )
      );

      setBoard(newBoard);
      setIsCellCorrect(newIsCorrect);
    }
  };

  return (
    <div className="sudoku-home">
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div className="sudoku-row" key={rowIndex}>
            {row.map((cell, colIndex) => {
              const isInputIncorrect =
                isCellCorrect[rowIndex][colIndex] === false && cell !== 0;
              return (
                <input
                  type="text"
                  key={colIndex}
                  value={cell !== 0 ? cell : ""}
                  onChange={(e) =>
                    handleChange(rowIndex, colIndex, e.target.value)
                  }
                  readOnly={isCellCorrect[rowIndex][colIndex]}
                  className={`sudoku-cell ${cell !== 0 ? `prewritten` : ``} ${
                    isInputIncorrect ? `incorrect` : ``
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <Button name="VOLVER A JUGAR " onClick={fetchBoard}/>
      {/* <button onClick={fetchBoard} className="btn">
        New Board
      </button> */}
    </div>
  );
};

export default Sudoku;
