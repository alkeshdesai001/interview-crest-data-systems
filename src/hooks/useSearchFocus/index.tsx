import { MutableRefObject, useCallback, useEffect } from "react";

const useSearchFocus = (inputRef: MutableRefObject<HTMLInputElement>) => {
  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        inputRef.current.focus();
      }
    },
    [inputRef]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);
};

export default useSearchFocus;
