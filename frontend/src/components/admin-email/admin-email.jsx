import React, {useEffect, useState} from "react";
import './admin-email.scss'
import axios from "axios";
import { CSVLink } from "react-csv";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

function AdminEmail() {
  const [subscribers, setSubscribers] = useState([]);

  // this is to get all info for subscribers from api
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

  // everything getting installed from api to CSV (if you add 'id', then id will also be installed)
  const headers = [
    {label: "First Name", key: "first_name"},
    {label: "Email Address", key: "email_address"}
  ]

  // table for subscribers
  const subscriberList = subscribers.map((subscriber) => {
    return (
      <tr key={subscriber.id} className="admin_table-info">
        <td>{subscriber.first_name}</td>
        <td>{subscriber.email_address}</td>
      </tr>
    )
  })

  return (
    <div className="admin" >
      <h1>Subcriber List</h1>
      <table className="table table-lg">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{subscriberList}</tbody>
      </table>
      <CSVLink className="admin_link" data={subscribers} headers={headers}>Download CSV</CSVLink>
    </div>
  )
}

export default AdminEmail;