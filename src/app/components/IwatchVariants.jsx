const IwatchVariants = ({ setActiveWatchImg }) => {
  const variants = [
    { color: "#78dbcc", img: "/mint.png", alt: "Mint iWatch" },
    { color: "#19324b", img: "/navy.png", alt: "Navy iWatch" },
    { color: "#87CEEB", img: "/ocean.png", alt: "Ocean iWatch" },
  ];
  return (
    <ul className="flex list-none gap-10 p-0">
      {variants.map((variant) => (
        <li
          key={variant.img}
          className="relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl"
          onClick={() => setActiveWatchImg(variant.img)} // skifter det store billede
          style={{ cursor: "pointer" }}
        >
          <div
            className="absolute top-7.5 z-0 h-15 w-25 rounded-xl"
            style={{ backgroundColor: variant.color }}
          ></div>
          <img
            className="relative z-10 h-18.75 w-18.75"
            src={variant.img}
            alt={variant.alt}
            width={75}
            height={75}
          />
        </li>
      ))}
    </ul>
  );
};

export default IwatchVariants;
