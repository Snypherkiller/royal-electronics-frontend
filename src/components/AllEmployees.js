import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../App.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox } from 'react-icons/md';

import { useHistory } from "react-router-dom";


export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    function getEmployees() {
      axios.get('http://localhost:8090/employee')
        .then((res) => {
          console.log(res.data);
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);

  const extractDate = (isoDateString) => {
    return isoDateString.substring(0, 10);
  };


  return (
    <div class="container">
      <h1>All Employees</h1>
      
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>NIC</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Salary</th>
            <th>OT</th>
            <th>Attendance</th>
            <th>Password</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>

          {employees.map((employee) => (
            <tr key={employee._id}>
               <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.nic}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{extractDate(employee.birthday)}</td>
              <td>{employee.gender}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>{employee.othours}</td>
              <td>{employee.attendance}</td>
              <td>{employee.password}</td>
              <td>
              <div>
                  <Link to={`/employee/update/${employee._id}`}>
                    <AiOutlineEdit className='text-2x1 text-yellow-600' />
                  </Link>
                  <Link to={`/employee/delete/${employee._id}`}>
                    <MdOutlineAddBox className='text-2x1 text-yellow-600' />
                  </Link>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
