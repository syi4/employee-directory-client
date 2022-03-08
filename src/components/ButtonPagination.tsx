import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSearchParams } from "react-router-dom";

interface ButtonPaginationProps {
  prevPage: string | null;
  nextPage: string | null;
  page: number;
  numberButtons: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ButtonPagination: React.FC<ButtonPaginationProps> = ({
  prevPage,
  setPage,
  page,
  numberButtons,
  nextPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNextClick = () => {
    setPage(page + 1);
    const incrementNumberToString = (page + 1).toString();
    setSearchParams({ page: incrementNumberToString });
  };

  const handlePrevClick = () => {
    setPage(page - 1);
    const decrementNumberToString = (page - 1).toString();
    setSearchParams({ page: decrementNumberToString });
  };

  const handleNumberButtonClick = (pageNumber: number) => {
    setPage(pageNumber);
    const pageNumberToString = pageNumber.toString();
    setSearchParams({ page: pageNumberToString });
  };

  return (
    <div className="d-flex justify-content-center py-3">
      <Pagination>
        <Pagination.Prev
          disabled={prevPage === null}
          onClick={handlePrevClick}
        />
        {numberButtons.map((number) => (
          <Pagination.Item
            key={number}
            active={number === page}
            onClick={() => handleNumberButtonClick(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={nextPage === null}
          onClick={handleNextClick}
        />
      </Pagination>
    </div>
  );
};
