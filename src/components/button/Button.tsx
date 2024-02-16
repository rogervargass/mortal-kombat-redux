import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <div className="container-btn">
      <button className="btn" {...rest}>
        {children}
      </button>
    </div>
  );
}

export default Button;
