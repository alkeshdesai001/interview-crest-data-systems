import { ChangeEventHandler, forwardRef } from "react";
import { classNameGenerator } from "../../../utils";

import styles from "./TextInput.module.scss";

interface TextInputProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  label?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, value, onChange, placeholder, label, ...rest }, ref) => {
    const cls = classNameGenerator(styles);

    return (
      <div className={cls("textInput")}>
        <input
          ref={ref}
          type="text"
          id={name}
          value={value}
          onChange={onChange}
          placeholder={label ? "" : placeholder}
          {...rest}
        />
        {label && <label htmlFor={name}>{label}</label>}
      </div>
    );
  }
);

export default TextInput;
