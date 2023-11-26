import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const AdminEstimateList = () => {
  const [estimateLists, setEstimateLists] = useState([]);

  //fetch all the estimates from database
  const getAllEstimates = () => {
    axios
      .get(`${URL}${PORT}/api/v1/customers`)
      .then((res) => {
        const result = res.data;
        setEstimateLists(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllEstimates();
  }, []);
  console.log('estimatelist', estimateLists);

  const estimates = estimateLists.map((estimate) => {
    return (
      <tr key={estimate.id}>
        <th scope="row">{estimate.id}</th>
        <td>{estimate.first_name}</td>
        <td>{estimate.last_name}</td>
        <td>{estimate.email_address}</td>
        <td>{estimate.home_address}</td>
        <td>{estimate.additional_info}</td>
        <td>
          <button className="btn btn-primary">{estimate.request_status}</button>
        </td>
        <td></td>
      </tr>
    );
  });

  return (
    <div>
      <h1>EstimateList</h1>
      <div className=".table-responsive">
        <table className="table table-hover table-lg">
          <thead className="thead-dark ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First_name</th>
              <th scope="col">Last_name</th>
              <th scope="col">Email_address</th>
              <th scope="col">Home_address</th>
              <th scope="col">Additional_info</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>{estimates && estimates}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEstimateList;
