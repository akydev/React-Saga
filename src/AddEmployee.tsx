import React, { useState } from "react";
import { IEmployee } from "./redux/interface/IEmployee";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { EmployeeRequest } from "./redux/action/employeeAction";

export default function AddEmployee() {
  const [data, setData] = useState<IEmployee>({
    createdAt: "",
    name: "",
    avatar: "",
    id: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(EmployeeRequest(data));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="avatar"
        type="text"
        onChange={handleChange}
        placeholder="Avatar Text"
      />
      <input
        name="name"
        type="text"
        onChange={handleChange}
        placeholder="Enter Your Name"
      />
      <input type="submit" value="Save" />
    </form>
  );
}
