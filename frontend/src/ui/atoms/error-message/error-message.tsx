import styles from "./styles.scss";
import cn from "classnames";
import AlertIcon from "@assets/svg/alert.svg";

type TProps = {
  message?: string;
  className?: string;
};

export const ErrorMessage = ({ message, className }: TProps) => {
  if (!message) return null;
  return (
    <div className={cn(styles.errorMessage, className)}>
      <AlertIcon />
      <p>{message}</p>
    </div>
  );
};
