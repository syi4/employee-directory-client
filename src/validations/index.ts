import * as Yup from "yup";

export const validateForm = Yup.object({
  first_name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  job_title: Yup.string().required("Required"),
  location: Yup.string()
    .min(2, "Two letter abbrev state")
    .max(2, "Two letter abbrev state")
    .required("Required"),
  department: Yup.string().required("Required"),
  start_date: Yup.string().required("Required"),
});
