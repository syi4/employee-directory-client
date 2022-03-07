import React from "react";
import Table from "react-bootstrap/Table";

import { Employee } from "../interfaces";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <Table hover>
      <TableHeader />
      <TableBody employees={employees} />
    </Table>
  );
};
