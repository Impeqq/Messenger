import React, { useState } from "react";
import styles from "./styles.scss";
import SearchIcon from "@assets/svg/search.svg";
import CloseIcon from "@assets/svg/close.svg";
import cn from "classnames";

type TProps = {
  handleClick: (name: string) => void;
  handleClear: () => void;
};

export const SearchInput = ({ handleClick, handleClear }: TProps) => {
  const [value, setValue] = useState("");

  const onClear = () => {
    setValue("");
    handleClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value) {
      handleClear();
    }
  };

  const handleSearch = () => {
    if (value) {
      handleClick(value);
    }
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
      <button
        className={cn(styles.closeButton, { [styles.emptyInput]: !value })}
        onClick={onClear}
      >
        <CloseIcon
          className={styles.iconClose}
          width="20px"
          height="20px"
          viewBox="0 0 26 26"
        />
      </button>
      <button className={styles.searchButton} onClick={handleSearch}>
        <SearchIcon
          className={styles.iconSearch}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        />
      </button>
    </div>
  );
};
