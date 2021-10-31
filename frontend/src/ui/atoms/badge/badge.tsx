import React from "react";
import styles from "./styles.scss";

type TProps = {
  number: number;
};

export const Badge = ({ number }: TProps) => {
  return <div className={styles.badge}>{number}</div>;
};
