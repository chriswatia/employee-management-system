import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployeeComponent = () => {
  const navigate = useNavigate(); 

  //Create State
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    //Prevent reload of page
    e.preventDefault();

    //Call save endpoint
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            type="submit"
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-1 px-6"
          >
            Save
          </button>
          <button
            type="reset"
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-1 px-6"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
