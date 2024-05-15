import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddCustomer() {
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {id} = useParams()

  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault();

    const customerData = {

      password
    };

    // Send the customer ID and password to the server for account deletion
    axios.delete(`/customer/delete/${id}`, { data: customerData })
      .then(() => {
        alert("Account deleted successfully");
        setSubmitted(true);
        navigate('/customer/add')
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (submitted) {
    return (
      <div className="container">
        <h2>Account Deleted Successfully</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Delete Account</h2>
      <form onSubmit={sendData}>
      
       
        {/* Password */}
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* Delete Account Button */}
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-danger">
              Delete Account
            </button>

          </div>
        </div>
      </form>
    </div>
  );
}
