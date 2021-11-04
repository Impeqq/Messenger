import styles from "./styles.scss";
import { ChatsList } from "./chats-list";
import { SearchList } from "./search-list";
import { AUTH_TOKEN } from "@features/constants";
import { NewUsersList } from "./new-users-list";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchList />
      <ChatsList />
      <NewUsersList />
    </div>
  );
};
