import { useCallback, useEffect, useRef, useState } from "react";

import TextInput from "../../Atoms/TextInput";

import useSearchFocus from "../../../hooks/useSearchFocus";
import useDebouncedSearch from "../../../hooks/useDebouncedSearch";

import { classNameGenerator } from "../../../utils";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  callback: (search: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ callback }) => {
  const cls = classNameGenerator(styles);

  const inputRef = useRef<HTMLInputElement>(null!);

  useSearchFocus(inputRef);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebouncedSearch(search, 300);

  useEffect(() => {
    if (debouncedSearch) {
      callback(debouncedSearch);
    }
  }, [callback, debouncedSearch]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e?.target?.value),
    []
  );

  return (
    <div className={cls("searchInput")}>
      <TextInput
        ref={inputRef}
        name="searchInput"
        value={search}
        onChange={handleChange}
        placeholder="Type here to search..."
        label="Search Countries"
      />
    </div>
  );
};

export default SearchInput;
