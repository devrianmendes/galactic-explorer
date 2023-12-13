import React from "react";

type ButtonProps = {
  content: string;
  action: () => void;
};

const Button = ({ content, action }: ButtonProps) => {
  const handleClick = () => {
    action();
  };
  return (
    <button
      className="bg-blue-600 p-2 rounded-md mx-auto m-2"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
