import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { api } from "../api";
import { TableHeader } from "../components/TableHeader";
import { Employee } from "../interfaces";

interface DetailsProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const Details: React.FC<DetailsProps> = ({
  employees,
  setEmployees,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [employee, setEmployee] = useState<Employee>({
    first_name: "",
    last_name: "",
    department: "",
    start_date: "",
    location: "",
    picture: "",
    email: "",
    job_title: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/api/employees/${id}`);
        setEmployee(data as Employee);
      } catch (err) {
        setError("Error fetching api");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/api/employees/${id}`);
      const newEmployeeList = employees.filter((user) => user.id !== id);
      setEmployees(newEmployeeList);
      navigate("/");
    } catch (err) {
      setError("Error deleting employee");
    }
  };

  return (
    <Container className="py-5">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {employee && !error && !loading && (
        <>
          <Table hover>
            <TableHeader />
            <tbody>
              <tr className="align-middle">
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
            </tbody>
          </Table>
          <div className="d-flex justify-content-center py-4">
            <Link to={`/edit-employee/${id}`} state={{ employee }}>
              <Button style={{ width: "200px" }}>Edit</Button>
            </Link>

            <Button
              style={{ width: "200px" }}
              variant="danger"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};
