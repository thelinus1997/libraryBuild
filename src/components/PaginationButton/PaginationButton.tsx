import React from "react";

interface PaginationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button className="px-10 mx-10 my-5" onClick={onClick}>
      {children}
    </button>
  );
};

export default PaginationButton;
