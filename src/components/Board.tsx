import { randomSquares } from "../hooks/randomSquares";
import Square from "./Square";
import { useState } from "react";
import { randomNumberComp } from "../hooks/randomNumberComp";
import { winCondition } from "../hooks/winCondition";
const Board = () => {
  const [boardState, setBoardState] = useState<number[]>([]);
  const [btn, setBtn] = useState<boolean>(true);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const [numOfRolls, setNumOfRolls] = useState<number>(0);
  const numbers = randomSquares();
  return (
    <>
      <span className="absolute top-0">{numOfRolls}</span>
      {btn && (
        <button
          className="p-5 m-5 bg-red-500 text-white"
          onClick={() => {
            setBoardState(numbers);
            setBtn(false);
          }}
        >
          Generate Board
        </button>
      )}
      <div className="flex justify-center items-center">
        {!btn && (
          <button
            className="p-5 m-5 bg-green-600 text-white"
            onClick={() => {
              const randomNumber = randomNumberComp();
              setRandomNumber(randomNumber);
              setWinningNumbers([...winningNumbers, randomNumber]);
              winCondition(winningNumbers, boardState, numOfRolls);
              setNumOfRolls(numOfRolls + 1);
            }}
          >
            Roll Number
          </button>
        )}
        <h1 className="text-2xl font-extrabold p-3">{randomNumber}</h1>
      </div>
      <div className="h-2/3 w-1/2 grid grid-cols-3">
        {boardState.map((num) => (
          <Square
            key={num}
            val={num}
            isGreen={
              winningNumbers.includes(num) ? "bg-green-600" : "bg-slate-700"
            }
          />
        ))}
      </div>
    </>
  );
};

export default Board;
