import React from "react";
import { Form } from "formik";
import Button from "react-bootstrap/Button";

import { InputField } from "./InputField";

interface EmployeeFormProps {
  isSubmitting: boolean;
  setFieldValue: (field: string, value: any) => void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  setFieldValue,
  isSubmitting,
}) => {
  return (
    <Form>
      <div className="d-flex w-100">
        <div className="w-50 p-1">
          <InputField name="first_name" type="text" label="First Name" />
        </div>
        <div className="w-50 p-1">
          <InputField name="last_name" type="text" label="Last Name" />
        </div>
      </div>
      <div className="d-flex">
        <div className="w-50 p-1">
          <InputField name="email" type="text" label="Email" />
        </div>
        <div className="w-50 p-1">
          <InputField
            name="start_date"
            type="text"
            label="Start Date: YYYY-MM-DD"
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="w-50 p-1">
          <InputField name="job_title" type="text" label="Job Title" />
        </div>
        <div className="w-50 p-1">
          <InputField name="department" type="text" label="Department" />
        </div>
      </div>
      <div className="d-flex">
        <div className="w-50 p-1">
          <InputField
            name="location"
            type="text"
            label="Location: Two letter state abbrev"
          />
        </div>
        <div className="w-50 p-1 my-2 d-flex flex-column">
          <label className="mb-2">Picture</label>
          <input
            name="picture"
            type="file"
            onChange={(e) => {
              setFieldValue("picture", e.target.files && e.target.files[0]);
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center p-2">
        <Button
          className="w-50"
          variant="secondary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};
