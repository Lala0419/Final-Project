import React, {useEffect, useState} from "react";
import './admin-email.scss'
import axios from "axios";
import { CSVLink } from "react-csv";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

function AdminEmail() {
  const [subscribers, setSubscribers] = useState([]);

  const getAllSubscribers = () => {
    axios
      .get(`${URL}${PORT}/api/v1/subscribers`)
      .then((res) => {
        const result = res.data;
        setSubscribers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllSubscribers();
  }, []);

  console.log(subscribers)

  const headers = [
    {label: "First Name", key: "first_name"},
    {label: "Email Address", key: "email_address"}
  ]


  return (
    <div className="admin" >
      <table className="admin_table">
        <tr className="admin_table-header">
          <th>Name</th>
          <th>Email</th>
          <CSVLink data={subscribers} headers={headers}>Install CSV</CSVLink>
        </tr>
        <tr className="admin_table-info">
          <td>Sasha</td>
          <td>test.test@mail.com</td>
        </tr>
      </table>
    </div>
  )
}

export default AdminEmail;