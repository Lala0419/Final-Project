import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./AdminEstimateList.scss";
import makeAnimated from "react-select/animated";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const animatedComponents = makeAnimated();

const AdminEstimateList = () => {
	const [estimateLists, setEstimateLists] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ value: "pending", label: "Pending" },
		{ value: "in process", label: "In Process" },
		{ value: "completed", label: "Completed" },
		{ value: "canceled", label: "Canceled" },
	];
	const id = estimateLists.map((estimate) => estimate.id);
	console.log("id", id);

	const loadOptions = (searchValue, callback) => {
		setTimeout(() => {
			const filteredOptions = options.filter((option) =>
				option.label.toLowerCase().includes(searchValue.toLowerCase())
			);
			callback(filteredOptions);
		}, 2000);
	};

	const handleOption = (selectedOption) => {
		setSelectedOption(selectedOption);
		console.log("selectedOption", selectedOption);
	};

	const handleClick = (event) => {
		console.log(event.currentTarget.id);
	};

	const estimates = estimateLists.map((estimate) => {
		return (
			<tr key={estimate.id} onClick={handleClick}>
				<th scope="row">{estimate.id}</th>
				<td>{estimate.first_name}</td>
				<td>{estimate.last_name}</td>
				<td>{estimate.email_address}</td>
				<td>{estimate.home_address}</td>
				<td>{estimate.additional_info}</td>
				<td>
					<div className="admin-status-box">
						{estimate.request_status}
						<Select
							defaultValue={selectedOption}
							components={animatedComponents}
							onChange={handleOption}
							options={options}
							name="request_status"
							value={selectedOption}
							loadOptions={loadOptions}
							defaultOptions
						/>
					</div>
				</td>
			</tr>
		);
	});

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

	console.log("estimatelist", estimateLists);

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
