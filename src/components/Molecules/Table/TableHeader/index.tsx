import { classNameGenerator } from "../../../../utils";

import styles from "./TableHeader.module.scss";

interface TableHeaderProps {
  header: string[];
  onHeaderClick: (id: number) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ header, onHeaderClick }) => {
  const cls = classNameGenerator(styles);

  return (
    <tr className={cls("tableHeader")}>
      {header?.map((data, index) => (
        <th key={`${index}-${data}`} onClick={() => onHeaderClick(index)}>
          {data}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
