import React from "react";

type TitleProps = {
    title: string;
    subtitle: string;
}

const MainTitle = ({title, subtitle}: TitleProps) => {
  return (
    <div className="flex flex-col text-center mb-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h3 className="text-lg">{subtitle}</h3>
    </div>
  );
};

export default MainTitle;
