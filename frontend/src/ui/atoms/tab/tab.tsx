import styles from "./styles.scss";
import cn from "classnames";

type TProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};

export const Tab = ({ text, onClick, isActive }: TProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.tab, { [styles.active]: isActive })}
    >
      {text}
    </div>
  );
};
