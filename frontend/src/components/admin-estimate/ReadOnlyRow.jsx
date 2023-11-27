import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import "./AdminEstimateList.scss";

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
					<span
						className="readOnly-status"
						style={{
							backgroundColor: (() => {
								switch (estimateRow.request_status) {
									case "pending":
										return "rgb(0 127 255)";
									case "completed":
										return "rgb(57 208 66)";
									case "canceled":
										return "rgb(255 67 67)";
									case "in process":
										return "rgb(255 227 44)";
									default:
										return "white"; // or any default color
								}
							})(),
							padding: "1rem",
							borderRadius: "999px",
							width: "7rem",
							textAlign: "center",
							fontSize: "1rem",
							fontWeight: 600,
						}}
						// onClick={() => {
						// 	handleClick(estimateRow.request_status);
						// }}
					>
						{estimateRow.request_status}
					</span>
					<Select
						defaultValue={selectedOption}
						components={animatedComponents}
						onChange={handleOption}
						options={options}
						name="request_status"
						value={selectedOption}
						loadOptions={loadOptions}
						defaultOptions
						className="readOnly-select"
					/>
				</div>
			</td>
		</tr>
	);
}

export default ReadOnlyRow;
