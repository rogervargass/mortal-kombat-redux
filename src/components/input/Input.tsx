import { InputHTMLAttributes, forwardRef } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }: InputProps, ref) => {
    return (
      <div className="input-container">
        {label && (
          <label className="label" htmlFor="input-id">
            {label}
          </label>
        )}
        <input
          id="input-id"
          className="input"
          type="text"
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
