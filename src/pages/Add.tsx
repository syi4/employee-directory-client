import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import { useNavigate } from "react-router";

import { Employee } from "../interfaces";
import { EmployeeForm } from "../components/EmployeeForm";
import { validateForm } from "../validations";
import { addEmployee } from "../api";
import { uploadImage } from "../api";

interface AddProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const Add: React.FC<AddProps> = ({ employees, setEmployees }) => {
  const initialFormValues: Employee = {
    first_name: "",
    last_name: "",
    email: "",
    start_date: "",
    job_title: "",
    department: "",
    location: "",
    picture: "",
  };

  const navigate = useNavigate();

  const handleSubmit = async (values: Employee) => {
    const url = await uploadImage(values.picture);
    const data = await addEmployee({
      ...values,
      picture: url,
    });
    const newEmployeeList = [data, ...employees];
    setEmployees(newEmployeeList);
    navigate("/");
  };

  return (
    <Container className="p-1" style={{ maxWidth: "800px" }}>
      <h3 className="p-3 text-center">Add Employee</h3>
      <Card className="p-3">
        <Formik
          initialValues={initialFormValues}
          validationSchema={validateForm}
          onSubmit={(values) => {
            handleSubmit(values);
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
