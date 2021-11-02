import styles from "./styles.scss";
import cn from "classnames";
import LoaderIcon from "@assets/svg/loader.svg";

type TProps = {
  text: string;
  icon?: JSX.Element;
  iconDirection?: IconDirection;
  onClick?: () => void;
  style?: ButtonStyle;
  type?: ButtonType;
  loading?: boolean;
  className?: string;
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
}: TProps) => {
  return (
    <button
      className={cn(styles.button, className, styles[style], {
        [styles.isLoading]: loading,
        [styles.noText]: !text,
      })}
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
