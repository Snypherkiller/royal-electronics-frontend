import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import '../App.css'; // Import CSS file
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCustomer() {
    const [customerId, setCustomerId] = useState("");
    const [name, setName] = useState("");
    const [telephoneNo, setTelephoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [likePrivilege, setLikePrivilege] = useState("No");

    const navigate = useNavigate()

    const {id}= useParams()

    const [formData, setFormData] = useState({
        name: "",
        telephoneNo: "",
        email:"",
        idNumber: "",
        gender: "",
        likePrivilege: false,
      });
    
      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });

        if(name == "name"){
            setName(value);
        }else if(name == "email"){
            setEmail(value);
        }else if(name == "idNumber"){
            setIdNumber(value);
        }else if(name == "gender"){
            setGender(value);
        }else if(name == "telephoneNo"){
            setTelephoneNo(value);
        }
      };

    const handlePrivilegeChange = (event) => {
        setLikePrivilege(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
        axios.put(`customer/update/${id}`, formData).then((res) => {
            alert("Customer Updated");
            navigate(`/customer/profile/${id}`)
        }).catch((err) => {
            console.log(err)
        })
       
    };

    useEffect(()=>{
        axios.get(`customer/${id}`).then((res)=>{
            console.log(res.data.customer)
            setName(res.data.customer.name);
            setTelephoneNo(res.data.customer.telephoneNo);
            setEmail(res.data.customer.email);
            setIdNumber(res.data.customer.idNumber);
            setGender(res.data.customer.gender);

            setFormData(
                {
                    name: res.data.customer.name,
                    email: res.data.customer.email,
                    telephoneNo: res.data.customer.telephoneNo,
                    idNumber: res.data.customer.idNumber,
                    gender:res.data.customer.gender,
            
                }
            )
        })
    },[]);

  

    return (
        <div className="container">
            <h2>Update Customer Account</h2>
            <form onSubmit={handleSubmit}>
                
               
                {/* Name */}
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* Telephone Number */}
                <div className="form-group row">
                    <label htmlFor="telephoneNo" className="col-sm-2 col-form-label">
                        Telephone No
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="telephoneNo"
                            placeholder="Enter Telephone No"
                            name="telephoneNo"
                            value={telephoneNo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* ID Number */}
                <div className="form-group row">
                    <label htmlFor="idNumber" className="col-sm-2 col-form-label">
                        ID Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="idNumber"
                            placeholder="Enter ID Number"
                            name="idNumber"
                            value={idNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* Gender */}
                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">
                        Gender
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={handleChange}
                        >
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
              
                {/* New field for selecting privileged customer options */}
                <div className="form-group row">
                    <label htmlFor="privilege" className="col-sm-2 col-form-label">
                        Experience Privileged Customer Options
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="privilege"
                            value={likePrivilege}
                            onChange={handlePrivilegeChange}
                            required
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
