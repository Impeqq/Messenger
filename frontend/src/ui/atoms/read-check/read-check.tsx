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
        <AllDoneIcon width={20} height={20} className={styles.messageIcon} />
      ) : (
        <CheckmarkIcon width={20} height={20} className={styles.messageIcon} />
      )}
    </>
  );
};
