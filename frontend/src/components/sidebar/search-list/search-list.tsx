import styles from "./styles.scss";
import { SearchInput, UserItem, UserLocations } from "@ui";
import { useLazyQuery, useMutation } from "@apollo/client";
import { FETCH_SEARCH_USERS, SEND_CREATE_CHAT } from "@schemas";
import ChatIcon from "@assets/svg/chat.svg";
import { useHistory, useParams } from "react-router-dom";
import { routePath } from "@pages/routes";
import { RouteParams, TUser } from "@features/types";
import { useState } from "react";
import cn from "classnames";

export const SearchList = () => {
  const [users, setUsers] = useState<TUser[]>();
  const [fetchUsers] = useLazyQuery(FETCH_SEARCH_USERS, {
    fetchPolicy: "network-only",
    onCompleted: ({ searchUser }) => {
      setUsers(searchUser);
    },
  });
  const [sendCreateChat] = useMutation(SEND_CREATE_CHAT, {
    onCompleted: ({ createChat: { id } }) => {
      history.push(`${routePath.chat.path}/${id}`);
    },
  });

  const history = useHistory();

  const { id } = useParams<RouteParams>();

  const searchUsers = (name: string) => {
    fetchUsers({
      variables: {
        name,
      },
    });
  };

  const clearUsers = () => {
    setUsers(undefined);
  };

  const handleClick = (toId: string) => {
    clearUsers();
    if (id !== toId)
      sendCreateChat({
        variables: {
          user_to: toId,
        },
      });
  };

  return (
    <div className={styles.search}>
      <SearchInput handleClick={searchUsers} handleClear={clearUsers} />
      {users?.length === 0 ? (
        <div className={cn(styles.searchList, styles.notFound)}>
          There are no such users
        </div>
      ) : users !== undefined ? (
        <div className={styles.searchList}>
          {users?.map((user: TUser) => (
            <UserItem
              key={user.id}
              handleCreate={handleClick}
              className={styles.userItem}
              type={UserLocations.SIDEBAR}
              user={user}
              RightIcon={ChatIcon}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
