import React from "react";
import "./styles.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <div className="container-btn">
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
