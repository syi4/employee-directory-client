import React, { InputHTMLAttributes } from "react";
import { useField, ErrorMessage } from "formik";
import Form from "react-bootstrap/Form";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  size?: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group className="p-2 mb-3">
      <Form.Label htmlFor={field.name}>{label}</Form.Label>
      <Form.Control
        id={field.name}
        {...field}
        {...props}
        isInvalid={!!meta.error && !!meta.touched}
      />
      <ErrorMessage className="text-danger" name={field.name} />
    </Form.Group>
  );
};
