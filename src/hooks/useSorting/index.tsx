import { useEffect, useState } from "react";

interface SortingData<T, U> {
  data: T[];
  columnMap: U;
}

const useSorting = <T, U>({ data, columnMap }: SortingData<T, U>) => {
  const [sorting, setSorting] = useState({ column: 0, order: 1 });
  const [sortedList, setSortedList] = useState(data);

  useEffect(() => {
    if (sorting.column === 0 && sorting.order === 1) {
      setSortedList(data);
    } else {
      let _sortedList = [];
      if (sorting.column === 0) {
        // @ts-ignore
        _sortedList = [...data].sort((a, b) => (a.id - b.id) * sorting.order);
      } else {
        // @ts-ignore
        const key = Object.keys(columnMap)[sorting.column];
        _sortedList = [...data].sort(
          // @ts-ignore
          (a, b) => (a[key] > b[key] ? -1 : 1) * sorting.order
        );
      }
      setSortedList(_sortedList);
    }
  }, [data, sorting, columnMap]);

  const onHeaderClick = (column: number) => {
    setSorting((prevState) => {
      if (prevState.column === column) {
        return {
          column,
          order: prevState.order * -1,
        };
      }
      return {
        column,
        order: 1,
      };
    });
  };

  return { sortedList, onHeaderClick };
};

export default useSorting;
