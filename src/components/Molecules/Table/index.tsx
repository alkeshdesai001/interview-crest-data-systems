import { classNameGenerator } from "../../../utils";

import styles from "./Table.module.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  isLoading?: boolean;
  message?: string;
  header: string[];
  rows: (string | number)[][] | [];
  onHeaderClick: (id: number) => void;
}

const Table: React.FC<TableProps> = ({
  isLoading,
  message,
  header,
  rows,
  onHeaderClick,
}) => {
  const cls = classNameGenerator(styles);

  return (
    <table className={cls("table")}>
      <thead>
        <TableHeader header={header} onHeaderClick={onHeaderClick} />
      </thead>
      <tbody>
        {rows.length ? (
          rows?.map((row, index) => <TableRow key={index} row={row} />)
        ) : (
          <TableRow
            colSpan={header?.length}
            isLoading={isLoading}
            message={message}
          />
        )}
      </tbody>
    </table>
  );
};

export default Table;
