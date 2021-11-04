import styles from "./styles.scss";
import { FriendsList } from "./friends-list";
import { SearchList } from "./search-list/search-list";
import { AUTH_TOKEN } from "@features/constants";

export const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    // Reload page to reset all cache
    window.location.reload();
  };

  return (
    <div className={styles.sidebar}>
      <SearchList />
      <FriendsList />
    </div>
  );
};
