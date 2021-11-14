import { Header } from "@ui";
import { useLazyQuery, useQuery } from "@apollo/client";
import { FETCH_ME } from "@schemas";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";
import { Sidebar } from "@components";
import styles from "./styles.scss";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@features/hooks";
import { AUTH_TOKEN } from "@features/constants";
import { TUser } from "@features/types";

export const Main: React.FC = ({ children }) => {
  const history = useHistory();
  const [me, setMe] = useState<null | TUser>(null);
  const { getItem } = useLocalStorage();
  const [fetchMe] = useLazyQuery(FETCH_ME, {
    fetchPolicy: "network-only",
    onCompleted: ({ me }) => setMe(me),
    onError: () => {
      setMe(null);
      history.push(routePath.auth.path);
    },
  });

  const isGuest = getItem(AUTH_TOKEN);

  useEffect(() => {
    fetchMe();
  }, [fetchMe, isGuest]);

  return (
    <>
      <Header
        firstName={me?.firstName}
        lastName={me?.lastName}
        avatarId={me?.avatar?.id}
      />
      <div className={cn(styles.flex, { [styles.guest]: !me })}>
        {me && <Sidebar />}
        {children}
      </div>
    </>
  );
};
