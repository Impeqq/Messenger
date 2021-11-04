import React from "react";
import { Header } from "@ui";
import { useQuery } from "@apollo/client";
import { FETCH_ME } from "@schemas";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";
import { Sidebar } from "@components";
import styles from "./styles.scss";
import cn from "classnames";

type TProps = {
  className?: string;
};

export const Main: React.FC<TProps> = ({ children, className }) => {
  const history = useHistory();
  const { data } = useQuery(FETCH_ME, {
    onError: () => {
      history.push(routePath.auth.path);
    },
  });
  return (
    <div>
      <Header firstName={data?.me?.firstName} lastName={data?.me?.lastName} />
      <div className={cn(styles.flex, className)}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
