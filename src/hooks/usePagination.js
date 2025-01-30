import { useState } from "react";

function isGoToPageValid(targetPage, currentPage, totalPages) {
  return (
    targetPage > 0 && targetPage <= totalPages && targetPage !== currentPage
  );
}

export default function usePagination(initialPage = 1, initialTotalPages = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  function goToPage(targetPage) {
    if (isGoToPageValid(targetPage, currentPage, totalPages))
      setCurrentPage(targetPage);
  }

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    goToPage,
  };
}
