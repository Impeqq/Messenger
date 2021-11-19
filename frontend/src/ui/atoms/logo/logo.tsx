import { routePath } from "@pages/routes";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

export const Logo = () => {
  return (
    <Link to={routePath.main.path} className={styles.logo}>
      Messenger 💬
    </Link>
  );
};
