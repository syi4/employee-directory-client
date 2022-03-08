import axios from "axios";
import { Employee } from "../interfaces";

export const api = axios.create({
  baseURL: "http://localhost:1337",
});

export const uploadImage = async (file: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "hik8lwg4");

  if (!process.env.REACT_APP_CLOUDINARY_ACCOUNT) {
    throw new Error("No cloudinary url");
  }

  try {
    const { data } = await api.post(
      process.env.REACT_APP_CLOUDINARY_ACCOUNT,
      formData
    );
    return data.url;
  } catch (err) {
    console.log(err);
  }
};

export const addEmployee = async (employeeInfo: Employee) => {
  try {
    const { data } = await api.post("/api/add-employee", employeeInfo);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const editEmployee = async (
  id: string,
  updatedEmployeeInfo: Employee
) => {
  try {
    const { data } = await api.patch(
      `/api/employees/${id}`,
      updatedEmployeeInfo
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
