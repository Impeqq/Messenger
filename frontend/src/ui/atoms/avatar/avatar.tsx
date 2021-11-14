import styles from "./styles.scss";
import Avatar1 from "@assets/images/avatar1.png";

type TProps = {
  image: string | null;
  alt?: string;
  isOnline?: boolean;
  notifications?: number;
};

export const Avatar = ({
  image,
  alt = "Messenger",
  isOnline = false,
  notifications = 0,
}: TProps) => {
  return (
    <div className={styles.avatar}>
      <img src={image || Avatar1} alt={alt} className={styles.image} />
      {isOnline && <div className={styles.online} />}
      {!!notifications && (
        <div className={styles.notifications}>{notifications}</div>
      )}
    </div>
  );
};
