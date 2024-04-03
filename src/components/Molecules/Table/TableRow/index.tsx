import { classNameGenerator } from "../../../../utils";

import styles from "./TableRow.module.scss";

interface TableRowProps {
  row: (string | number)[];
}

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  const cls = classNameGenerator(styles);

  return (
    <tr className={cls("tableRow")}>
      {row?.map((data, index) => (
        <td key={`${index}-${data}`}>{data}</td>
      ))}
    </tr>
  );
};

export default TableRow;
