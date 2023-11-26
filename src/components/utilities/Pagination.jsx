import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  function handlePrev(event) {
    if (page == 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  }
  function handleNext(event) {
    if (page == lastPage) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  }

  return (
    <div className="flex gap-4 items-center justify-center text-white text-xl font-bold">
      <button
        onClick={handlePrev}
        className="hover:text-primary1 transition ease-in-out duration-700"
      >
        Prev
      </button>
      <span>{page}</span>
      of
      <span>{lastPage}</span>
      <button
        onClick={handleNext}
        className="hover:text-primary1 transition ease-in-out duration-700"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
