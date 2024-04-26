import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

export default function DeleteEmployee() {

    const params = useParams();
  const employeeId = params.id;
  const baseUrl = `employee/`;

    const navigate = useNavigate();

    const handDeleteEmployee = () => {
        axios
            .delete(`${baseUrl}delete/${employeeId}`)
            
            .then(() => {
                navigate('/employee');
                console.log("Done")
            })
            .catch((error) => {
                console.error(error);
                alert("An error happened. Please check console");
            });
    };

    return (
        <div>
            <div>DeleteEmployee</div>
            <button onClick={handDeleteEmployee}>Delete</button>
        </div>
    );
}

