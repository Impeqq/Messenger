import React from "react";
import styles from "./styles.scss";
import cn from "classnames";

type TProps = {
  title?: string;
  message?: string;
  className?: string;
};

export const ErrorMessage = ({
  title = "Error",
  message,
  className,
}: TProps) => {
  if (!message) return null;
  return (
    <div className={cn(styles.errorMessage, className)}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{message}</span>
    </div>
  );
};
