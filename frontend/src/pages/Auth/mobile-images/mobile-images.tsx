import Example1 from "@assets/images/example1.png";
import Example2 from "@assets/images/example2.png";
import styles from "./styles.scss";

export default function MobileImages() {
  return (
    <div className={styles.images}>
      <span className={styles.title}>Messenger for the mobile devices</span>
      <span className={styles.description}>
        Always keep in touch with your friends
      </span>
      <div className={styles.imagesGroup}>
        <img src={Example1} alt={"Our application"} />
        <img src={Example2} alt={"The best!"} />
      </div>
      <span className={styles.mobileInfo}>Coming soon! :)</span>
    </div>
  );
}
