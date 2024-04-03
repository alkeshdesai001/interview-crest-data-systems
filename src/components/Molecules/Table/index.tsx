import { classNameGenerator } from "../../../utils";

import styles from "./Table.module.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  header: string[];
  rows: (string | number)[][] | [];
}

const Table: React.FC<TableProps> = ({ header, rows }) => {
  const cls = classNameGenerator(styles);

  return (
    <table className={cls("table")}>
      <thead>
        <TableHeader header={header} />
      </thead>
      <tbody>
        {rows?.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
