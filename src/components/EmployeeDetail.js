import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { useNavigate } from 'react-router-dom';

export default function EditEmployee() {

  const navigate = useNavigate();
  const params = useParams();
  const employeeId = params.id;
  const baseUrl = `employee/`;
  const updateUrl = `${baseUrl}update/${employeeId}`;

  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    nic: "",
    phone: "",
    email: "",
    birthday: "",
    gender: "",
    position: "",
    salary: "",
    othours: "",
    attendance: "",
    password: ""
  });

  const [searchId, setSearchId] = useState(""); // State to hold the search ID

  async function fetchEmployeeDetails() {
    try {
      const res = await axios.get(`${baseUrl}${searchId}`);
      setEmployee(res.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateEmployee(e) {
    e.preventDefault();

    const newEmployee = { ...employee }; // Copy the employee object
    try {
      await axios.put(updateUrl, newEmployee);
      alert("Employee Updated");
      navigate('/employee');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="searchId">Enter Employee ID:</label>
        <br />
        <input
          type="text"
          id="searchId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={fetchEmployeeDetails}>Search</button>
      </div>

      <form
        onSubmit={updateEmployee}
        className="form-group"
        action="/submit"
        method="post"
      >
        {/* Form fields go here */}
      </form>
    </div>
  );
}
