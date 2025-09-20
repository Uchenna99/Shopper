import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const [windowStart, setWindowStart] = useState(1);
  const windowSize = 3;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      // Adjust window if necessary
      if (page >= windowStart + windowSize) {
        setWindowStart(page - windowSize + 1);
      } else if (page < windowStart) {
        setWindowStart(page);
      }
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const end = Math.min(windowStart + windowSize - 1, totalPages);
    for (let i = windowStart; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 font-monts-regular text-sm
            ${currentPage === i
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-black-text hover:bg-gray-300 cursor-pointer'
            }`
          }
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handlePrevious = () => {
    if (windowStart > 1) {
      setWindowStart(windowStart - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (windowStart + windowSize - 1 < totalPages) {
      setWindowStart(windowStart + 1);
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={handlePrevious}
        disabled={windowStart === 1}
        className="w-8 h-8 rounded-full ring-1 text-black-text hover:text-orange-500 disabled:opacity-50 transition-all duration-200
        flex items-center justify-center disabled:pointer-events-none"
      >
        <ChevronLeft size={18}/>
      </button>

      {getPageNumbers()}

      <button
        onClick={handleNext}
        disabled={windowStart + windowSize - 1 >= totalPages}
        className="w-8 h-8 rounded-full ring-1 text-black-text hover:text-orange-500 disabled:opacity-50 transition-all duration-200
        flex items-center justify-center"
      >
        <ChevronRight size={18}/>
      </button>
    </div>
  );
};

export default Pagination;