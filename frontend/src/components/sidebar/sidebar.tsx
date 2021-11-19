import styles from "./styles.scss";
import { ChatsList } from "./chats-list";
import { SearchList } from "./search-list";
import { NewUsersList } from "./new-users-list";
import cn from "classnames";

type TProps = {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
};

export const Sidebar = ({ isOpenSidebar, toggleSidebar }: TProps) => {
  return (
    <div className={cn(styles.sidebar, { [styles.active]: isOpenSidebar })}>
      <SearchList toggleSidebar={toggleSidebar} />
      <ChatsList toggleSidebar={toggleSidebar} />
      <NewUsersList />
    </div>
  );
};
