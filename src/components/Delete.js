import React,{ useState ,useEffect } from "react";
import axios from "axios";

export default function Delete(){
    const urlParams=new URLSearchParams(window.location.search);
    const furnitureName =urlParams.get("name");
    const Url =`http://localhost:8090/furniture/${furnitureName}`;
    const Url2 =`http://localhost:8090/furniture/delete/${furnitureName}`;


    const[furnitueItems,setFurnitureItems] =useState([]);

    useEffect(()=>{
        axios.get(Url)
        .then((res)=>{console.log(res.data)
            setFurnitureItems(res.data)
        console.log({furnitueItems})})
        .catch(err=>console.log(err));
    },[])

    function deletedRecord(){
        axios.delete(Url2)
        .then((response) => {
            console.log(response);
            alert('Data has been deleted');
        })
        .catch((err) => {
            console.log(err);
            alert('An error occurred while trying to delete the data');
        });
    }

    return(
        <div className="container"> 
            <h2>Furniture to be deleted {Url} , {Url2} </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Furniture Name </th>
                        <th>Type</th>
                        <th>Purchase price</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Selling Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        furnitueItems.map((furniture,index)=>{
                            return <tr key={index}>
                                      <td>{furniture.name}</td>
                                      <td>{furniture.type}</td>
                                      <td>{furniture.pprice}</td>
                                      <td>{furniture.status}</td>
                                      <td>{furniture.quantity}</td>
                                     <td>{furniture.sprice}</td>
                                     <td>{furniture.description}</td>
                                </tr>
                        })
                    }
                </tbody>
                </table>

                <li className="nav-item">
                <label for="deleteRecord"> Are you Sure you want to Delete this Record :</label><br/>
                <a className="nav-link" id="deleteRecord" href={`/Furniturelist/deleted`} onClick={deletedRecord}>Yes Delete!</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="deleteRecord" href={`/Furniturelist`}>No Don't!</a>
                </li>

        </div>

    )
}