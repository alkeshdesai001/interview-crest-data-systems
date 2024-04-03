import { useMemo } from "react";
import { useCountriesContext } from "../../../reducers/CountriesReducer";

import Table from "../../Molecules/Table";
import Pagination from "../../Molecules/Pagination";

import usePagination from "../../../hooks/usePagination";
import useSorting from "../../../hooks/useSorting";

import { classNameGenerator } from "../../../utils";

import styles from "./CountriesTable.module.scss";

interface CountriesTableProps {}

const columnMap = {
  id: "ID",
  name: "Name",
  flag: "Flag",
};

type Country = {
  id: number;
  name: string;
  flag: string;
};

const CountriesTable: React.FC<CountriesTableProps> = () => {
  const cls = classNameGenerator(styles);

  const { isLoading, countriesList = [], search } = useCountriesContext();

  const { sortedList, onHeaderClick } = useSorting<Country, typeof columnMap>({
    data: countriesList,
    columnMap,
  });

  const { postPerPage, totalPageNo, pageNo, setPageNo, list } =
    usePagination<Country>({
      data: sortedList,
    });

  const countriesHeader = useMemo(() => Object.values(columnMap), []);

  const countriesRows = useMemo(() => {
    return list?.map(({ id, name, flag }) => [id, name, flag]) || [];
  }, [list]);

  return (
    <div className={cls("countriesTable")}>
      <Table
        header={countriesHeader}
        rows={countriesRows}
        isLoading={isLoading}
        message={search ? "No result found" : "Start searching"}
        onHeaderClick={onHeaderClick}
      />
      <Pagination
        postPerPage={postPerPage}
        totalPageNo={totalPageNo}
        pageNo={pageNo}
        setPageNo={setPageNo}
      />
    </div>
  );
};

export default CountriesTable;
