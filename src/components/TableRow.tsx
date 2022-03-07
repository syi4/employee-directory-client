import React from "react";
import { useNavigate } from "react-router-dom";

import { Employee } from "../interfaces";

interface TableRowProps {
  employee: Employee;
}

export const TableRow: React.FC<TableRowProps> = ({ employee }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <tr
      style={{ cursor: "pointer" }}
      className="align-middle"
      onClick={handleClick}
    >
      <td>
        <img
          style={{ objectFit: "cover" }}
          width="72px"
          height="72px"
          src={employee.picture}
          alt={`employee ${employee.first_name} ${employee.last_name}`}
        />
      </td>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.job_title}</td>
      <td>{employee.department}</td>
      <td>{employee.location}</td>
      <td>{employee.email}</td>
      <td>{employee.start_date}</td>
    </tr>
  );
};
