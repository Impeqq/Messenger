import { useEffect, useReducer } from "react";

/**
 * Хук, который оперирует localStorage, при этом ререндерит все вызовы getItem из localStorage
 */
export const useLocalStorage = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const handleChangeStorage = () => {
      forceUpdate();
    };

    window.addEventListener("storage", handleChangeStorage);
    return () => window.removeEventListener("storage", handleChangeStorage);
  }, []);

  const getItem = (key: string) => localStorage.getItem(key);

  const setItem = (key: string, value: any) => {
    localStorage.setItem(key, value);
    initStorageEvent();
  };
  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    initStorageEvent();
  };

  return { getItem, setItem, removeItem };
};

const initStorageEvent = () => {
  const e: any = document.createEvent("StorageEvent");
  e.initStorageEvent(
    "storage",
    true,
    false,
    "",
    "",
    "",
    window.location.href,
    window.localStorage
  );
  window.dispatchEvent(e);
};
