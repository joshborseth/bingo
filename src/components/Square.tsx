type squareProps = {
  val: number;
  isGreen: string;
};

const Square = (props: squareProps) => {
  return (
    <div
      className={`${props.isGreen} text-white flex justify-center items-center border-2`}
    >
      <h1>{props.val}</h1>
    </div>
  );
};

export default Square;
