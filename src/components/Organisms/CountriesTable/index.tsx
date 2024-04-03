import { useEffect, useMemo, useState } from "react";
import { useCountriesContext } from "../../../reducers/CountriesReducer";

import Table from "../../Molecules/Table";
import Pagination from "../../Molecules/Pagination";

import usePagination from "../../../hooks/usePagination";

import { classNameGenerator } from "../../../utils";

import styles from "./CountriesTable.module.scss";
import useSorting from "../../../hooks/useSorting";

interface CountriesTableProps {}

const columnMap = {
  id: "ID",
  name: "Name",
  flag: "Flag",
};

const CountriesTable: React.FC<CountriesTableProps> = () => {
  const cls = classNameGenerator(styles);

  const { isLoading, countriesList = [], search } = useCountriesContext();

  const { sortedList, onHeaderClick } = useSorting({
    data: countriesList,
    columnMap,
  });

  const { postPerPage, totalPageNo, pageNo, setPageNo, list } = usePagination({
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
