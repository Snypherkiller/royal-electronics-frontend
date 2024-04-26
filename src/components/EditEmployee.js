import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { useNavigate } from 'react-router-dom';

export default function EditEmployee() {

  const navigate = useNavigate();
  const params = useParams();
  const employeeId = params.id;
  const baseUrl = `employee/`;
  const updateUrl = `${baseUrl}update/${employeeId}`;

  const [employee, setemployee] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNIC] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [othours, setOTHours] = useState("");
  const [attendance, setAttendance] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`Hello`);
    axios
      .get(`${baseUrl}${employeeId}`)
      .then((res) => {
        console.log(res.data.user);
        setemployee(res.data.user);
    
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
      setName(employee.name);
      setAddress(employee.address);
      setNIC(employee.nic);
      setPhone(employee.phone);
      setEmail(employee.email);
      setBirthday(employee.birthday);
      setGender(employee.gender);
      setPosition(employee.position);
      setSalary(employee.salary);
      setOTHours(employee.othours);
      setAttendance(employee.attendance);
      setPassword(employee.password);

  }, [employee]);

  async function updateEmployee(e) {
    e.preventDefault();

    const newemployee = {
      name: name,
      address: address,
      nic: nic,
      phone: phone,
      email: email,
      birthday: birthday,
      gender: gender,
      position: position,
      salary: salary,
      othours: othours,
      attendance: attendance,
      password: password,
    };

    try {
      await axios.put(updateUrl, newemployee);
      alert("Employee Updated");
      navigate('/employee');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container">
      
      <form
        onSubmit={updateEmployee}
        className="form-group"
        action="/submit"
        method="post"
      >
        <div>
          <label for="employeeName">Edit Name:</label>
          <br />
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            placeholder = { name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeeAddress">Edit Address:</label>
          <br />
          <input
            type="text"
            id="employeeAddress"
            name="employeeAddress"
            placeholder={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeeNIC">Edit NIC:</label>
          <br />
          <input
            type="text"
            id="employeeNIC"
            name="employeeNIC"
            placeholder={nic}
            onChange={(e) => {
              setNIC(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeePhone">Edit Phone:</label>
          <br />
          <input
            type="text"
            id="employeePhone"
            name="employeePhone"
            placeholder={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeeEmail">Edit Email:</label>
          <br />
          <input
            type="text"
            id="employeeEmail"
            name="employeeEmail"
            placeholder={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeeBirthday">Edit Birthday:</label>
          <br />
          <input
            type="DATE"
            id="employeeBirthday"
            name="employeeBirthday"
            placeholder={birthday}
            value = {birthday?.slice(0, 10)}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
                disabled
              />
              <label className="form-check-label" htmlFor="gridRadios3">
                Other
              </label>
            </div>
          </div>
        </fieldset>

        <div>
          <label for="employeePosition">Edit Position:</label>
          <br />
          <select
            id="employeePosition"
            name="employeePosition"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            <option value="Manager">{position}</option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Driver">Driver</option>
            <option value="Admin">Admin</option>
          </select>
          <br />
          <br />
        </div>

        <div>
          <label for="employeeSalary">Edit Salary:</label>
          <br />
          <input
            type="text"
            id="employeeSalary"
            name="employeeSalary"
            placeholder={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeeOTHours">Edit OTHours:</label>
          <br />
          <input
            type="text"
            id="employeeOTHours"
            name="employeeOTHours"
            placeholder={othours}
            onChange={(e) => {
              setOTHours(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeeAttendance">Edit Attendance:</label>
          <br />
          <input
            type="text"
            id="employeeAttendance"
            name="employeeAttendance"
            placeholder={attendance}
            onChange={(e) => {
              setAttendance(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <div>
          <label for="employeePassword">Edit Password:</label>
          <br />
          <input
            type="text"
            id="employeePassword"
            name="employeePassword"
            placeholder={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
        </div>

        <a href="/">
          {" "}
          <input type="submit" value="Submit" />{" "}
        </a>
      </form>
    </div>
  );
}
