const ColorPick = ({ setActiveWatchImg }) => {
  return (
    <div className="col-[content-end] row-[hero-start/hero-end] mt-40 flex flex-col justify-self-end">
      <button
        className="my-2 h-6.25 w-6.25 cursor-pointer rounded-full border-2 bg-[#19324b]"
        onClick={() => setActiveWatchImg("/navy.png")}
      ></button>
      <button
        className="my-2 h-6.25 w-6.25 cursor-pointer rounded-full border-2 bg-[#78dbcc]"
        onClick={() => setActiveWatchImg("/mint.png")}
      ></button>
      <button
        className="my-2 h-6.25 w-6.25 cursor-pointer rounded-full border-2 bg-[#87ceeb]"
        onClick={() => setActiveWatchImg("/ocean.png")}
      ></button>
    </div>
  );
};

export default ColorPick;
