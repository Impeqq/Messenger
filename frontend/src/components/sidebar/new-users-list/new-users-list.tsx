import { useQuery, useSubscription } from "@apollo/client";
import { TUser } from "@features/types";
import { FETCH_NEW_USERS, SUBSCRIBE_NEW_USER } from "@schemas";
import { SiebarItem, UserItem, UserLocations } from "@ui";
import { useState } from "react";
import Avatar3 from "@assets/images/avatar3.png";
import styles from "./styles.scss";

export const NewUsersList = () => {
  const [newUsers, setNewUsers] = useState<TUser[]>([]);

  const { loading } = useQuery(FETCH_NEW_USERS, {
    onCompleted: ({ getNewUsers: data }) => {
      setNewUsers(data);
    },
  });

  useSubscription(SUBSCRIBE_NEW_USER, {
    onSubscriptionData: ({
      subscriptionData: {
        data: { userRegistred },
      },
    }) => {
      const arr = newUsers.length >= 5 ? newUsers.slice(0, -1) : newUsers;
      setNewUsers([{ ...userRegistred }, ...arr]);
    },
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <SiebarItem title={"Last 5 new users"}>
      {newUsers.map((user: TUser) => (
        <UserItem
          key={user.id}
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
