import React from "react";

import { EmployeeTable } from "../components/EmployeeTable";
import { Employee } from "../interfaces";
import { ButtonPagination } from "../components/ButtonPagination";
import Container from "react-bootstrap/Container";

interface HomeProps {
  employees: Employee[];
  loading: boolean;
  error: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  nextPage: string | null;
  prevPage: string | null;
}

export const Home: React.FC<HomeProps> = ({
  employees,
  loading,
  error,
  page,
  setPage,
  totalPages,
  prevPage,
  nextPage,
}) => {
  // For loop to display numbers for paginated buttons
  const numberButtons = [];
  for (let number = 1; number <= totalPages; number++) {
    numberButtons.push(number);
  }

  return (
    <Container className="py-5">
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error fetching api</h1>}
      {employees && !error && !loading && (
        <EmployeeTable employees={employees} />
      )}
      {employees && !error && !loading && (
        <ButtonPagination
          prevPage={prevPage}
          nextPage={nextPage}
          page={page}
          setPage={setPage}
          numberButtons={numberButtons}
        />
      )}
    </Container>
  );
};
