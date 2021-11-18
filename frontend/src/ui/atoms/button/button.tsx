import styles from "./styles.scss";
import cn from "classnames";
import LoaderIcon from "@assets/svg/loader.svg";
import { ALERT_SECONDS } from "@features/constants";
import { useEffect, useState } from "react";

type TProps = {
  text: string;
  icon?: JSX.Element;
  iconDirection?: IconDirection;
  onClick?: () => void;
  style?: ButtonStyle;
  type?: ButtonType;
  loading?: boolean;
  className?: string;
  withDisable?: boolean;
};

export enum IconDirection {
  LEFT = "left",
  RIGHT = "right",
}

export enum ButtonStyle {
  OUTLINE = "outline",
  FILL = "fill",
  GHOST = "ghost",
}

export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export const Button = ({
  onClick,
  text,
  icon,
  iconDirection = IconDirection.LEFT,
  style = ButtonStyle.FILL,
  type = ButtonType.BUTTON,
  loading = false,
  className,
  withDisable = false,
}: TProps) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (withDisable && loading) {
      setSeconds(ALERT_SECONDS);
    }
  }, [loading, withDisable]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seconds !== 0) {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <button
      className={cn(styles.button, className, styles[style], {
        [styles.isLoading]: loading,
        [styles.noText]: !text,
        [styles.disabled]: seconds !== 0,
      })}
      disabled={seconds !== 0}
      type={type}
      onClick={onClick}
    >
      {iconDirection === IconDirection.LEFT && icon}
      {text && <span>{text}</span>}
      <LoaderIcon className={styles.loader} />
      {iconDirection === IconDirection.RIGHT && icon}
    </button>
  );
};
