import styles from "./styles.scss";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { requiredField } from "@features/constants/rules";

type TProps = {
  placeholder: string;
  name: string;
  className?: string;
  type?: string;
  rules?: Record<string, any>;
};

export const Input = ({
  name,
  placeholder,
  className,
  type = "text",
  rules = requiredField,
}: TProps) => {
  const { register, errors } = useFormContext();
  return (
    <div className={cn(styles.input, className)}>
      <input
        ref={register(rules)}
        type={type}
        placeholder={placeholder}
        name={name}
        className={cn({ [styles.error]: errors[name] })}
      />
      {errors[name] && <span>{errors[name]?.message} 😕</span>}
    </div>
  );
};
