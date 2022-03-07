import React from "react";
import Pagination from "react-bootstrap/Pagination";

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
  return (
    <div className="d-flex justify-content-center py-4">
      <Pagination>
        <Pagination.Prev
          disabled={prevPage === null}
          onClick={() => setPage(page - 1)}
        />
        {numberButtons.map((number) => (
          <Pagination.Item
            key={number}
            active={number === page}
            onClick={() => setPage(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={nextPage === null}
          onClick={() => setPage(page + 1)}
        />
      </Pagination>
    </div>
  );
};
