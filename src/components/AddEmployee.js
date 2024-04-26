import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddEmployee() {

  const navigate = useNavigate();

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


  function sendData(e) {
    e.preventDefault();
    

    const newemployee = {

      name,
      address,
      nic,
      phone,
      email,
      birthday,
      gender,
      position,
      salary,
      othours,
      attendance,
      password
    }
    console.log(newemployee);
    axios.post("http://localhost:8090/employee/add", newemployee).then(() => {
      alert("Employee added")
      navigate('/employee');
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="row mb-3">
          <label htmlFor="inputname3" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="name" className="form-control" id="inputname3" onChange={(e) => {

              setName(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputaddress3" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input type="address" className="form-control" id="inputaddress3" onChange={(e) => {

              setAddress(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputnic3" className="col-sm-2 col-form-label">NIC</label>
          <div className="col-sm-10">
            <input type="nic" className="form-control" id="inputnic3" onChange={(e) => {

              setNIC(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputphone3" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="tel" className="form-control" id="inputphone3" onChange={(e) => {

              setPhone(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">E-mail</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" onChange={(e) => {

              setEmail(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputbirthday3" className="col-sm-2 col-form-label">Birthday</label>
          <div className="col-sm-10">
            <input type="DATE" className="form-control" id="inputbirthday3" onChange={(e) => {

              setBirthday(e.target.value);

            }} />
          </div>
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


        <div className="row mb-3">
          <label htmlFor="positionSelect" className="col-sm-2 col-form-label">Position</label>
          <div className="col-sm-10">
            <select className="form-select" id="positionSelect" onChange={(e) => setPosition(e.target.value)}>
              <option value="none">Select position...</option>
              <option value="Manager">Manager</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Driver">Driver</option>
              <option value="Admin">Admin</option>
            </select>`
          </div>
        </div>


        <div className="row mb-3">
          <label htmlFor="inputsalary3" className="col-sm-2 col-form-label">Salary</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputsalary3" onChange={(e) => {

              setSalary(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputot3" className="col-sm-2 col-form-label">OT-hours</label>
          <div className="col-sm-10">
            <input type="numbers" className="form-control" id="inputot3" onChange={(e) => {

              setOTHours(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputattenders3" className="col-sm-2 col-form-label">Attendance</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputattenders3" onChange={(e) => {

              setAttendance(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" onChange={(e) => {

              setPassword(e.target.value);

            }} />
          </div>
        </div>



        <button type="submit" className="btn btn-primary" >Insert Data</button>
      </form>
    </div>
  );
}
