import { useMemo } from "react";
import { useCountriesContext } from "../../../reducers/CountriesReducer";

import Table from "../../Molecules/Table";
import Pagination from "../../Molecules/Pagination";

import usePagination from "../../../hooks/usePagination";

import { classNameGenerator } from "../../../utils";

import styles from "./CountriesTable.module.scss";

interface CountriesTableProps {}

const CountriesTable: React.FC<CountriesTableProps> = () => {
  const cls = classNameGenerator(styles);

  const { countriesList = [] } = useCountriesContext();

  const { postPerPage, totalPageNo, pageNo, setPageNo, list } = usePagination({
    data: countriesList,
  });

  const countriesHeader = useMemo(() => ["ID", "Name", "Flag"], []);

  const countriesRows = useMemo(() => {
    return list?.map(({ id, name, flag }) => [id, name, flag]) || [];
  }, [list]);

  console.log("[log-countriesList]", countriesList);

  return (
    <div className={cls("countriesTable")}>
      <Table header={countriesHeader} rows={countriesRows} />
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
