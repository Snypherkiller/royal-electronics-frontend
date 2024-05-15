import axios from "../utils/axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function CustomerSignin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    axios
      .post("customer/login", formData)
      .then((res) => {
        if (res.data.status == "success") {
          let id = res.data.id;
          navigate(`profile/${id}`);
        }else{
          alert(res.data.message)
        }        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form className="px-4 py-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="dropdownCheck">
            Remember me
          </label>
        </div>

        <input type="submit" value="Sign In" className="btn btn-primary" />
      </form>
      <div className="dropdown-divider"></div>
      <Link className="dropdown-item" to="/customer/add">
        New around here? Sign up
      </Link>
      <Link className="dropdown-item" to="/">
        Forgot password?
      </Link>
    </div>
  );
}
