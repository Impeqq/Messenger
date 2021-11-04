import styles from "./styles.scss";
import SearchIcon from "@assets/svg/search.svg";
import CloseIcon from "@assets/svg/close.svg";
import cn from "classnames";
import { BaseForm } from "@components";
import { useForm, UseFormOptions } from "react-hook-form";
import { Input } from "..";

type TProps = {
  handleClick: (name: string) => void;
  handleClear: () => void;
};

const searchName = "search";

export const SearchInput = ({ handleClick, handleClear }: TProps) => {
  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const value = formMethods.watch(searchName);

  const onClear = () => {
    formMethods.setValue(searchName, "");
    handleClear();
  };

  const handleSearch = (data: UseFormOptions["defaultValues"]) => {
    const value = data?.[searchName];
    if (value) {
      handleClick(value);
    }
  };

  return (
    <BaseForm
      formMethods={formMethods}
      onSubmit={handleSearch}
      className={styles.input}
    >
      <Input
        className={styles.realInput}
        name={searchName}
        rules={{}}
        placeholder="Search"
      />
      <button
        type="button"
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
      <button className={styles.searchButton} type="submit">
        <SearchIcon
          className={styles.iconSearch}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        />
      </button>
    </BaseForm>
  );
};
