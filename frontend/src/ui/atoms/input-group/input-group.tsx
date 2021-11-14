import styles from "./styles.scss";
import cn from "classnames";

type TProps = {
  className?: string;
};

export const InputGroup: React.FC<TProps> = ({ children, className }) => {
  return <div className={cn(styles.inputGroup, className)}>{children}</div>;
};
