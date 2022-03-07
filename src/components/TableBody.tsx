import React from "react";

import { Employee } from "../interfaces";
import { TableRow } from "./TableRow";

interface TableBodyProps {
  employees: Employee[];
}

export const TableBody: React.FC<TableBodyProps> = ({ employees }) => {
  return (
    <tbody>
      {employees.map((employee) => (
        <TableRow employee={employee} key={employee.id} />
      ))}
    </tbody>
  );
};
