import styles from "./styles.scss";

type TProps = {
  image: string;
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
      <img src={image} alt={alt} className={styles.image} />
      {isOnline && <div className={styles.online} />}
      {!!notifications && (
        <div className={styles.notifications}>{notifications}</div>
      )}
    </div>
  );
};
