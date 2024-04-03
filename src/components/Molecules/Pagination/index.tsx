import { classNameGenerator } from "../../../utils";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  postPerPage: number;
  totalPageNo: number;
  pageNo: number;
  setPageNo: (pageNo: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPageNo,
  pageNo,
  setPageNo,
}) => {
  const cls = classNameGenerator(styles);

  if (totalPageNo <= 1) {
    return <></>;
  }

  const handlePrevious = () => setPageNo((prevState) => prevState - 1);
  const handleNext = () => setPageNo((prevState) => prevState + 1);

  return (
    <div className={cls("pagination")}>
      <button onClick={handlePrevious} disabled={pageNo === 1}>
        Prev
      </button>
      {pageNo} out of {totalPageNo}
      <button onClick={handleNext} disabled={pageNo === totalPageNo}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
