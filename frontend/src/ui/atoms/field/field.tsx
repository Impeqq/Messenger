import styles from "./styles.scss";

type TProps = {
  title: string;
  text: string;
  className?: string;
};

export const Field = ({ title, text, className }: TProps) => {
  return (
    <div className={className}>
      <span className={styles.title}>{title}</span>
      <br />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
