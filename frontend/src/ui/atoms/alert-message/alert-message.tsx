import styles from "./styles.scss";
import cn from "classnames";
import CheckmarkIcon from "@assets/svg/checkmark.svg";
import AlertIcon from "@assets/svg/alert.svg";
import { useEffect, useState } from "react";
import { ALERT_SECONDS } from "@features/constants";
import { AlertTypes } from "@features/enum";

type TProps = {
  message?: string;
  className?: string;
  type: AlertTypes;
};

export const AlertMessage = ({ message, className, type }: TProps) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (message) {
      setSeconds(ALERT_SECONDS);
    }
  }, [message]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seconds !== 0) {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [seconds]);

  if (!message || seconds === 0) return null;
  return (
    <div className={cn(styles.message, styles[type], className)}>
      {type === AlertTypes.SUCCESS ? <CheckmarkIcon /> : <AlertIcon />}
      <p>
        {message}. Will hide in {seconds}s
      </p>
    </div>
  );
};
