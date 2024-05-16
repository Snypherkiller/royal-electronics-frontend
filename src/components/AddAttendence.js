import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddAttendence() {

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [othours, setOTHours] = useState("");
  const [attendance, setAttendance] = useState("");


  function sendData(e) {
    e.preventDefault();
    

    const newattendence = {

      date,
      othours,
      attendance
    }
    console.log(newattendence);
    axios.post("http://localhost:8090/attendence/add", newattendence).then(() => {
      alert("attendence added")
      navigate('/employee');
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div className="container1">
      <form onSubmit={sendData}>
        

        <div className="row mb-3">
          <label htmlFor="inputbirthday3" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
            <input type="DATE" className="form-control" id="inputbirthday3" onChange={(e) => {

              setDate(e.target.value);

            }} />
          </div>
        </div>


        <div className="row mb-3">
          <label htmlFor="inputot3" className="col-sm-2 col-form-label">OT-hours</label>
          <div className="col-sm-10">
            <input type="numbers" className="form-control" id="inputot3" placeholder="OT<20" onChange={(e) => {

              setOTHours(e.target.value);

            }} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputattenders3" className="col-sm-2 col-form-label">Attendance</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputattenders3" placeholder="Attendance" onChange={(e) => {

              setAttendance(e.target.value);

            }} />
          </div>
        </div>




        <button type="submit" className="btn btn-primary" >Update Data</button>
      </form>
    </div>
  );
}
