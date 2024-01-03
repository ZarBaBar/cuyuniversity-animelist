const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage((prevPage) => (prevPage = lastPage));
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage((prevPage) => (prevPage = 1));
    scrollTop();
  };
  return (
    <div className="flex justify-center item-center py-5 px-2 gap-4 text-color-primary text-xl">
      {page <= 1 ? null : (
        <button
          onClick={handleFirstPage}
          className="transition-all hover:text-color-accent"
        >
          First Page
        </button>
      )}

      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
      {page === lastPage ? null : (
        <button
          onClick={handleLastPage}
          className="transition-all hover:text-color-accent"
        >
          Last Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
