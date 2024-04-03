import { useEffect, useState } from "react";

const useDebouncedSearch = (value: string, delay: number) => {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setSearch(value), delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return search;
};

export default useDebouncedSearch;
