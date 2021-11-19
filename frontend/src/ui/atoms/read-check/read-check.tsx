import styles from "./styles.scss";
import CheckmarkIcon from "@assets/svg/checkmark.svg";
import AllDoneIcon from "@assets/svg/all-done.svg";

type TProps = {
  read?: boolean;
};

export const ReadCheck = ({ read }: TProps) => {
  return (
    <>
      {read ? (
        <AllDoneIcon className={styles.messageIcon} />
      ) : (
        <CheckmarkIcon className={styles.messageIcon} />
      )}
    </>
  );
};
