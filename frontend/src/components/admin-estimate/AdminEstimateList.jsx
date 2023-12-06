import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminEstimateList.scss";
import ReadOnlyRow from "./ReadOnlyRow";

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

	return (
		<div>
			<h1>Estimate List</h1>
			<div className=".table-responsive">
				<table className="table table-hover table-lg">
					<thead className="thead-dark ">
						<tr>
							<th scope="col">#</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Phone Number</th>
							<th scope="col">Email Address</th>
							<th scope="col">Home Address</th>
							<th scope="col">Additional Info</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						{estimateLists.map((estimateList) => (
							<ReadOnlyRow estimateList={estimateList} key={estimateList.id} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminEstimateList;
