import styles from "./styles.scss";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { requiredField } from "@features/constants/rules";
import React, { useState } from "react";
import EyeIcon from "@assets/svg/eye.svg";
import EyeHiddenIcon from "@assets/svg/eye-hidden.svg";

type TProps = {
  placeholder?: string;
  text?: string;
  name: string;
  className?: string;
  type?: string;
  rules?: Record<string, any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hidden?: boolean;
};

export const Input = ({
  name,
  placeholder = "",
  className,
  type = "text",
  rules = requiredField,
  text,
  onChange,
  hidden = false,
}: TProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const { register, errors } = useFormContext();

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={cn(styles.input, className)}>
      {text && <p className={styles.title}>{text}</p>}
      <input
        ref={register(rules)}
        type={!isHidden && type === "password" ? "text" : type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={cn({ [styles.error]: errors[name] })}
      />
      {hidden && (
        <div className={styles.eye} onClick={toggleHidden}>
          {isHidden ? <EyeHiddenIcon /> : <EyeIcon />}
        </div>
      )}
      {errors[name] && <span>{errors[name]?.message} 😕</span>}
    </div>
  );
};
