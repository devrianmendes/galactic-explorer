import { ReactNode, useState } from "react";
import SmallText from "../SmallText";
import Paragraph from "../Paragraph";

type EachRoverProps = {
  name: string;
  image: string;
  children: ReactNode;
};

const EachRover = ({ name, image, children }: EachRoverProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [rover, setRover] = useState("");

  const getRoverInfo = async () => {
    const response = await getRoverPhotos();
  };

  return (
    <div
      className="flex flex-col items-center mb-6 bg-gray-900 p-1 rounded-md"
      onClick={() => {
        setShowInfo(!showInfo);
        setRover(name.toLowerCase());
      }}
    >
      <div>
        <img
          className="rounded-md"
          src={image}
          alt={`Imagem do rover ${name}`}
        />
      </div>
      <SmallText content={name} />
      <div className={`${showInfo ? "block" : "hidden"} mt-2`}>
        <Paragraph>{children}</Paragraph>
        <p>Data de lançamento: </p>
      </div>
      <div></div>
    </div>
  );
};

export default EachRover;
