export const winCondition = (
  winningNumbers: number[],
  boardState: number[],
  numOfRolls: number
) => {
  let numbersWon = 0;
  boardState.forEach((square) => {
    if (winningNumbers.includes(square)) {
      numbersWon++;
    }
    if (numbersWon === 9) {
      alert(`you have won with a total score of: ${numOfRolls}`);
      window.location.reload();
    }
  });
};
