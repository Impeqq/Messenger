import React from "react";
import { Main } from "@ui";
import styles from "./styles.scss";

const Home = () => {
  return (
    <Main>
      <h1 className={styles.title}>Select a chat to start messaging 🤔</h1>
    </Main>
  );
};

export default Home;
