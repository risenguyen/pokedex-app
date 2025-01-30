import PropTypes from "prop-types";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Pagination({ currentPage, totalPages, goToPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end">
      <div className="flex gap-4">
        <h1 className="font-SFPro text-stone-200">
          Page {currentPage} of {totalPages}
        </h1>
        <div className="flex items-center justify-center gap-1">
          <button
            // disabled={!lastPageValid}
            onClick={() => goToPage(currentPage - 1)}
            type="button"
            className="flex items-center rounded-md border border-[#484748] transition-colors hover:border-stone-100"
          >
            <BiChevronLeft size="20px" color="#fff" />
          </button>
          <button
            onClick={() => goToPage(currentPage + 1)}
            type="button"
            className="flex items-center rounded-md border border-[#484748] transition-colors hover:border-stone-100"
          >
            <BiChevronRight size="20px" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  goToPage: PropTypes.func,
};
