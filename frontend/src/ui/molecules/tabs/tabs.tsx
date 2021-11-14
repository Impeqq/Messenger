import { Tab } from "@ui";
import { Fragment, useState } from "react";
import styles from "./styles.scss";
import cn from "classnames";

type TProps = {
  tabs: string[];
  items: React.ReactNode[];
  className?: string;
};

export const Tabs = ({ tabs, items, className }: TProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (key: number) => {
    setActiveTab(key);
  };

  return (
    <>
      <div className={cn(styles.tabs, className)}>
        {tabs.map((tab, key) => (
          <Tab
            key={key}
            isActive={key === activeTab}
            text={tab}
            onClick={() => handleClick(key)}
          />
        ))}
      </div>
      {items.map(
        (item, key) =>
          key === activeTab && <Fragment key={key}>{item}</Fragment>
      )}
    </>
  );
};
