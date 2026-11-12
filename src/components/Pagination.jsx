import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <nav className="pagination">
      <button
        aria-label="Page précédente"
        onClick={() => {
          if (page > 1) {
            setPage((prev) => prev - 1);
          }
        }}
      >
        <LuChevronLeft />
      </button>

      <p>
        Page {page} / {totalPages}
      </p>

      <button
        aria-label="Page suivante"
        onClick={() => {
          if (page < totalPages) {
            setPage((prev) => prev + 1);
          }
        }}
      >
        <LuChevronRight />
      </button>
    </nav>
  );
};

export default Pagination;
