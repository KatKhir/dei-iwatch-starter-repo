import NextImage from "next/image";

const WatchImage = ({ img }) => {
  return (
    <figure>
      <NextImage src={img} alt="iWatch" width={450} height={450} />
    </figure>
  );
};

export default WatchImage;
