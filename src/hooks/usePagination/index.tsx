import { useEffect, useState } from "react";

const usePagination = ({ data }: { data: any[] }) => {
  const postPerPage = 10;
  const [totalPageNo, setTotalPageNo] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);

  const [list, setList] = useState([]);

  useEffect(() => {
    setPageNo(1);
    setTotalPageNo(Math.ceil(data.length / postPerPage));
  }, [data]);

  useEffect(() => {
    const currentCount = postPerPage * pageNo;
    const _list =
      [...data]?.slice(currentCount - postPerPage, currentCount) || [];
    setList(_list);
  }, [data, pageNo, postPerPage]);

  return {
    postPerPage,
    totalPageNo,
    pageNo,
    setPageNo,
    list,
  };
};

export default usePagination;
