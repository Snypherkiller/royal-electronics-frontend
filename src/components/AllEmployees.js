import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../App.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox } from 'react-icons/md';

import { useHistory } from "react-router-dom";


// report generation
import jsPDF from 'jspdf';
require('jspdf-autotable')

export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [employeesSearch, setEmployeesSearch] = useState([]);//Search
  const [key, setKey] = useState('');//Search

  useEffect(() => {
    function getEmployees() {
      axios.get('http://localhost:8090/employee')
        .then((res) => {
          console.log(res.data);
          setEmployees(res.data);
          setEmployeesSearch(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);
//Search
  useEffect(() => {
    let filteredEmployees=employees;
    if(key != ''){
    
      filteredEmployees=filteredEmployees.filter(employee=>employee.name.toLowerCase().includes(key.toLowerCase()))

    }
    setEmployeesSearch(filteredEmployees)
    
  
  }, [key]);

  const extractDate = (isoDateString) => {
    return isoDateString.substring(0, 10);
  };
//report generation
  const createPDF = () => {

    const unit = "pt";
    const size = "A4"; // page size
    const orientation = "portrait";
    const doc = new jsPDF(orientation, unit, size);

    const title = `| Royal Electronic | Employees |`;

    //logo
    const left = 50;
    const top = 50;
    const imgWidth = 100;
    const imgHeight = 100;

    doc.setFontSize(15);

    doc.text(150, 93, title);

    doc.text(40, 200, `Total Employees : ${employees.length}`)

    const tableColumn = ["ID", "Name", "Email"];
    const tableRows = [];

    employees.forEach(user => {
        const userData = [
            
            user._id,
            user.name,
            user.email,
            
        ];
        tableRows.push(userData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 300 });


    //doc.addImage(logo, 'PNG', left, top, imgWidth, imgHeight);

    doc.save(`EmployeeReport.pdf`);
}


  return (

    <div class="container">
      <h1>All Employees</h1>
      
      <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Searching..."
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </div>
      
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

          {employeesSearch.map((employee) => (
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
      <button onClick={()=>createPDF()}>Genarate Report</button>
    </div>

  );
}
