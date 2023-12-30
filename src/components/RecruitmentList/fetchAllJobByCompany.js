import { useState, useEffect } from "react";
import { callGetAllJobByCompanyID } from "../../service/job/api";

const fetchAllJobByCompany = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const no = Math.min(currentPage, totalPages);
      try {
        const result = await callGetAllJobByCompanyID(no, 3);
        console.log("result", result);
        setData(result.data);
        setTotalPages(result.totalPages);
        setLoading(false);
      } catch (err) {
        console.log("Lỗi khi tải dữ liệu:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return { loading, data, totalPages, currentPage, setCurrentPage };
};

export default fetchAllJobByCompany;
