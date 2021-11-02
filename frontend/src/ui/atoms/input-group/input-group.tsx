import styles from "./styles.scss";

export const InputGroup: React.FC = ({ children }) => {
  return <div className={styles.inputGroup}>{children}</div>;
};
