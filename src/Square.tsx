type Props = {
  index: number;
  //   this was necessary so it would read the function with the right type of event
  onClick(event: any): void;
  player?: String;
};
//the index doesn't go inside the component, it goes where you actually map over the items/players
function Square({ index, onClick, player }: Props) {
  const scale = player ? "scale-100" : "scale-0";
  const textColor = player === "X" ? "text-yellow-200" : "text-fuchsia-300";
  const hoverStyle = "transition duration-50 hover:scale-15 transform";
  return (
    <div
      data-cell-index={index}
      className={`h-36  border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center cursor-pointer ${hoverStyle}`}
      {...{ onClick }}
    >
      <span
        data-cell-index={index}
        className={`transform transition-all duration-150 ease-out ${scale} ${textColor}`}
      >
        {player}
      </span>
    </div>
  );
}
export default Square;
