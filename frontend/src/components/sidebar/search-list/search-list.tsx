import styles from "./styles.scss";
import { SearchInput, UserItem, UserLocations } from "@ui";
import Avatar3 from "@assets/images/avatar3.png";
import { useLazyQuery, useMutation } from "@apollo/client";
import { FETCH_SEARCH_USERS, SEND_CREATE_CHAT } from "@schemas";
import ChatIcon from "@assets/svg/chat.svg";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";
import { TUser } from "@features/types";

export const SearchList = () => {
  const [fetchUsers, { data }] = useLazyQuery(FETCH_SEARCH_USERS);
  const [sendCreateChat] = useMutation(SEND_CREATE_CHAT, {
    onCompleted: ({ createChat: { id } }) => {
      history.push(`${routePath.chat.path}/${id}`);
    },
  });

  const history = useHistory();

  const searchUsers = (name: string) => {
    fetchUsers({
      variables: {
        name,
      },
    });
  };

  const handleClick = (id: string) => {
    sendCreateChat({
      variables: {
        user_to: id,
      },
    });
  };

  return (
    <div className={styles.search}>
      <SearchInput handleClick={searchUsers} />
      {data?.searchUser.length ? (
        <div className={styles.searchList}>
          {data?.searchUser.map((user: TUser) => (
            <UserItem
              handleCreate={handleClick}
              className={styles.userItem}
              isOnline={true}
              type={UserLocations.SIDEBAR}
              avatar={Avatar3}
              user={user}
              message={""}
              RightIcon={ChatIcon}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
