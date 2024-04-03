import { classNameGenerator } from "../../../../utils";

import styles from "./TableHeader.module.scss";

interface TableHeaderProps {
  header: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ header }) => {
  const cls = classNameGenerator(styles);

  return (
    <tr className={cls("tableHeader")}>
      {header?.map((data, index) => (
        <th key={`${index}-${data}`}>{data}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
