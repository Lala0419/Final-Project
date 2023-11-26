import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

const animatedComponents = makeAnimated();

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

function ReadOnlyRow({ estimateList }) {
	const [selectedOption, setSelectedOption] = useState(null);
	const [estimateRow, setEstimateRow] = useState(estimateList);

	const options = [
		{ value: "pending", label: "Pending" },
		{ value: "in process", label: "In Process" },
		{ value: "completed", label: "Completed" },
		{ value: "canceled", label: "Canceled" },
	];

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
		axios
			.patch(`${URL}${PORT}/api/v1/customers/${estimateRow.id}`, {
				...estimateRow,
				request_status: selectedOption.value,
			})
			.then((res) => {
				setEstimateRow(res.data);
			})
			.catch((error) => {
				console.log("error", error);
			});
	};

	return (
		<tr key={estimateRow.id}>
			<th scope="row">{estimateRow.id}</th>
			<td>{estimateRow.first_name}</td>
			<td>{estimateRow.last_name}</td>
			<td>{estimateRow.email_address}</td>
			<td>{estimateRow.home_address}</td>
			<td>{estimateRow.additional_info}</td>
			<td>
				<div className="admin-status-box">
					{estimateRow.request_status}
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
}

export default ReadOnlyRow;
