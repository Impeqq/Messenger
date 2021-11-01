import React from "react";
import styles from "./styles.scss";
import { FriendsList } from "./friends-list";
import LogoutIcon from "@assets/svg/logout.svg";
import MessageIcon from "@assets/svg/message.svg";
import { SearchList } from "./search-list/search-list";
import { AUTH_TOKEN } from "@features/constants";
import { Button, ButtonStyle, IconDirection } from "@ui";

export const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    // Reload page to reset all cache
    window.location.reload();
  };

  const handleSupport = () => {
    console.log("support");
  };

  return (
    <div className={styles.sidebar}>
      <SearchList />
      <FriendsList />

      <div className={styles.sidebarFooter}>
        <Button
          style={ButtonStyle.GHOST}
          text={"Support"}
          onClick={handleSupport}
          icon={<MessageIcon />}
          iconDirection={IconDirection.LEFT}
        />
        <Button
          style={ButtonStyle.GHOST}
          text={"Sign Out"}
          onClick={handleLogout}
          icon={<LogoutIcon />}
          iconDirection={IconDirection.LEFT}
        />
      </div>
    </div>
  );
};
