import { classNameGenerator } from "../../../../utils";

import styles from "./TableRow.module.scss";

interface TableRowProps {
  isLoading?: boolean;
  message?: string;
  colSpan?: number;
  row?: (string | number)[];
}

const TableRow: React.FC<TableRowProps> = ({
  isLoading,
  message,
  colSpan = 1,
  row,
}) => {
  const cls = classNameGenerator(styles);

  if (isLoading || message) {
    return (
      <tr className={cls("tableRow")}>
        <td colSpan={colSpan} className={cls("message")}>
          {isLoading ? "Loading..." : message}
        </td>
      </tr>
    );
  }

  return (
    <tr className={cls("tableRow")}>
      {row?.map((data, index) => (
        <td key={`${index}-${data}`}>{data}</td>
      ))}
    </tr>
  );
};

export default TableRow;
