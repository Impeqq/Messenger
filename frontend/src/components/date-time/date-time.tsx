import styles from "./styles.scss";

type TProps = {
  date: string;
};

export const DateTime = ({ date }: TProps) => {
  if (!date) {
    return null;
  }

  const hh = new Date(Number(date)).getHours();
  const mm = new Date(Number(date)).getMinutes();
  const dateModyfied = `${hh}:${String(mm).length === 1 ? "0" + mm : mm}`;

  return <span className={styles.time}>{dateModyfied}</span>;
};
