import React, { useState, useEffect } from 'react';
import axios from "../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../App.css'; // Import CSS file

export default function AllCustomers(){
    const navigate= useNavigate()
    const [customer, setCustomer] = useState(null);
    const [databaseUpdated, setDatabaseUpdated] = useState(false);

    const {id} = useParams();

    function getCustomerData(){
        axios.get(`/customer/${id}`).then((res)=>{
            console.log(res);
            if (res.data.customer) {
                setCustomer(res.data.customer);
            } else {
                setCustomer(null);
            }
        }).catch((err)=>{
            alert(err.message);
        })
    }
    
    useEffect(() => {
        getCustomerData();
    }, []); // Fetch data whenever databaseUpdated state changes

    const handleRefresh = () => {
        getCustomerData();
    };

    const handleUpdate = (customerId) => {
        navigate(`/profile/update/${customerId}`)
    };

    const handleDelete = (customerId) => {
        navigate(`/profile/delete/${customerId}`)

    };

    return (
        <div className='container'>
            <h2>Welcome!!</h2>
            <button onClick={handleRefresh}>Refresh</button>
            {customer ? (
                <div className="customer-details">
                
                
                    <p><strong>Name:</strong> {customer.name}</p>
                    <p><strong>Telephone No:</strong> {customer.telephoneNo}</p>
                    <p><strong>Email:</strong> {customer.email}</p>
                    <p><strong>ID Number:</strong> {customer.idNumber}</p>
                    <p><strong>Gender:</strong> {customer.gender}</p>
                    <div className='action-buttons'>
                        <button className="update-btn" onClick={() => handleUpdate(id)}>Update</button>
                        <button className="delete-btn" onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>No customer data available</p>
            )}
        </div>
    )
    
}
