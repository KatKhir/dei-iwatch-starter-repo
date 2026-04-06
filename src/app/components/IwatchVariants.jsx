const IwatchVariants = ({ setActiveWatchImg }) => {
  const variants = [
    { color: "#78dbcc", img: "/mint.png", alt: "Mint iWatch" },
    { color: "#19324b", img: "/navy.png", alt: "Navy iWatch" },
    { color: "#87CEEB", img: "/ocean.png", alt: "Ocean iWatch" },
  ];
  return (
    <ul className="variants">
      {variants.map((variant) => (
        <li
          key={variant.img}
          className="variant-item"
          onClick={() => setActiveWatchImg(variant.img)} // skifter det store billede
          style={{ cursor: "pointer" }}
        >
          <div className="bg-box" style={{ backgroundColor: variant.color }}></div>
          <img src={variant.img} alt={variant.alt} width={75} height={75} />
        </li>
      ))}
    </ul>
  );
};

export default IwatchVariants;
