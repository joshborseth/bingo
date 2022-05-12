export const randomSquares = () => {
  let arr = [];
  while (arr.length < 9) {
    let r = Math.floor(Math.random() * 50) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};
