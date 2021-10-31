import React from "react";
import styles from "./styles.scss";

type TProps = {
  date: string;
};

export const Date = ({ date }: TProps) => {
  return (
    <div className={styles.date}>
      <span>{date}</span>
    </div>
  );
};
