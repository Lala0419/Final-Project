import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

const animatedComponents = makeAnimated();

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

function ReadOnlyRow({ estimateList }) {
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ value: "pending", label: "Pending" },
		{ value: "in process", label: "In Process" },
		{ value: "completed", label: "Completed" },
		{ value: "canceled", label: "Canceled" },
	];

	console.log("estimateList", estimateList);
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
			.patch(`${URL}${PORT}/api/v1/customers/${estimateList.id}`, {
				...estimateList,
				request_status: selectedOption.value,
			})
			.then((res) => {
				console.log("data", res);
			})
			.catch((error) => {
				console.log("error", error);
			});
	};

	const handleClick = (event) => {
		console.log(event.currentTarget.id);
	};
	return (
		<tr key={estimateList.id} onClick={handleClick}>
			<th scope="row">{estimateList.id}</th>
			<td>{estimateList.first_name}</td>
			<td>{estimateList.last_name}</td>
			<td>{estimateList.email_address}</td>
			<td>{estimateList.home_address}</td>
			<td>{estimateList.additional_info}</td>
			<td>
				<div className="admin-status-box">
					{estimateList.request_status}
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
