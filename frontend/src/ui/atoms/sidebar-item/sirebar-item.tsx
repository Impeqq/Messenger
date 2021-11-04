import styles from "./styles.scss";
import ArrowTop from "@assets/svg/arrow-top.svg";
import { useState } from "react";
import cn from "classnames";

type TProps = {
  title: string;
};

export const SiebarItem: React.FC<TProps> = ({ children, title }) => {
  const [isOpen, setisOpen] = useState(true);

  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.header} onClick={handleOpen}>
        <span>{title}</span>
        <ArrowTop className={cn(styles.icon, { [styles.active]: isOpen })} />
      </div>
      <div className={cn(styles.content, { [styles.hidden]: !isOpen })}>
        {children}
      </div>
    </div>
  );
};
