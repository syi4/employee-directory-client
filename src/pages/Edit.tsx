import React from "react";
import Container from "react-bootstrap/Container";
import { Employee } from "../interfaces";
import { EmployeeForm } from "../components/EmployeeForm";

import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import { validateForm } from "../validations";
import { editEmployee } from "../api";
import { uploadImage } from "../api";
import { useNavigate, useLocation } from "react-router";

interface EditProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

interface EditPageLocationState {
  employee: Employee;
}

export const Edit: React.FC<EditProps> = ({ employees, setEmployees }) => {
  const location = useLocation();

  const { employee } = location.state as EditPageLocationState;

  const initialFormValues: Employee = {
    first_name: employee.first_name,
    last_name: employee.last_name,
    email: employee.email,
    start_date: employee.start_date,
    job_title: employee.job_title,
    department: employee.department,
    location: employee.location,
    picture: employee.picture,
  };

  console.log(initialFormValues);

  const navigate = useNavigate();

  const handleSubmit = async (values: Employee) => {
    const url = await uploadImage(values.picture);
    const data = await editEmployee(employee.id as string, {
      ...values,
      id: employee.id,
      picture: url,
    });
    const updatedEmployeeList = employees.map((user) =>
      user.id === employee.id ? data : user
    );
    setEmployees(updatedEmployeeList);
    navigate("/");
  };

  return (
    <Container className="p-1" style={{ maxWidth: "800px" }}>
      <h3 className="p-3 text-center">Edit Employee</h3>
      <Card className="p-3">
        <Formik
          initialValues={initialFormValues}
          validationSchema={validateForm}
          onSubmit={(values) => {
            handleSubmit(values);
            console.log(values);
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <EmployeeForm
              setFieldValue={setFieldValue}
              isSubmitting={isSubmitting}
            />
          )}
        </Formik>
      </Card>
    </Container>
  );
};
