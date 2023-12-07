import React, { useEffect, useState } from 'react';
import './admin-email.scss';
import axios from 'axios';
import { CSVLink } from 'react-csv';

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
    { label: 'First Name', key: 'first_name' },
    { label: 'Email Address', key: 'email_address' }
  ];

  // table for subscribers
  const subscriberList = subscribers.map((subscriber) => {
    return (
      <tr key={subscriber.id} className="admin_table-info">
        <td className="table_row">{subscriber.id}</td>
        <td className="table_row">{subscriber.first_name}</td>
        <td className="table_row">{subscriber.email_address}</td>
      </tr>
    );
  });

  return (
    <div className="admin">
      <div className="admin_table_top">
        <h3 className="table_title">Subcribers List</h3>
        <CSVLink className="admin_link" data={subscribers} headers={headers}>
          Download CSV
        </CSVLink>
      </div>
      <table className="table table-lg table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="table_header">S/N</th>
            <th className="table_header">Name</th>
            <th className="table_header">Email</th>
          </tr>
        </thead>
        <tbody>{subscriberList}</tbody>
      </table>
    </div>
  );
}

export default AdminEmail;
