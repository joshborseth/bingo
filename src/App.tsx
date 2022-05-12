import Board from "./components/Board";

const App = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">Bingo With Joshua</h1>
      <Board />
    </div>
  );
};

export default App;
