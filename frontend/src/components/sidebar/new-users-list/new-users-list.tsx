import { useQuery } from "@apollo/client";
import { TUser } from "@features/types";
import { FETCH_NEW_USERS } from "@schemas";
import { SiebarItem, UserItem, UserLocations } from "@ui";
import { useState } from "react";
import Avatar3 from "@assets/images/avatar3.png";
import styles from "./styles.scss";

export const NewUsersList = () => {
  const [newUsers, setNewUsers] = useState<TUser[]>();

  const { loading } = useQuery(FETCH_NEW_USERS, {
    onCompleted: ({ getNewUsers: data }) => {
      setNewUsers(data);
    },
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <SiebarItem title={"Last 5 new users"}>
      {newUsers?.map((user: TUser) => (
        <UserItem
          className={styles.userItem}
          isOnline={true}
          // notifications={4}
          type={UserLocations.SIDEBAR}
          avatar={Avatar3}
          user={user}
        />
      ))}
    </SiebarItem>
  );
};
