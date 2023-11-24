import React, { useState } from "react";
import "./Estimate.scss";
import axios from "axios";
import Select from "react-select";
import { useSnackbar } from "react-simple-snackbar";

//SET THEM IN YOUR .ENV FILE
const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;
const snackbarOptions = {
	position: "right",
	style: {
		backgroundColor: "rgba(160, 148, 64)",
		border: "2px solid white",
		color: "",
		fontFamily: "Menlo, monospace",
		textAlign: "center",
		padding: "1rem",
	},
	closeStyle: {
		color: "#fff",
		fontSize: "16px",
	},
};

const Estimate = () => {
	const [post, setPost] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNum, setPhoneNum] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");
	const [hasErrorMessage, setHasErrorMessage] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [openSnackbar, closeSnackbar] = useSnackbar(snackbarOptions);

	const options = [
		{ value: "Window Washing", label: "Window washing" },
		{ value: "Mos Removal and Treatment", label: "Mos Removal and Treatment" },
		{ value: "Soft Wash of Siding", label: "Soft Wash of Siding" },
		{ value: "Gutter Cleaning", label: "Gutter Cleaning" },
		{
			value: "Fascia/Trim/Soffit Cleaning",
			label: "Fascia/Trim/Soffit Cleaning",
		},
		{ value: "Roof Cleaning", label: "Roof Cleaning" },
	];

	const handleOption = (selectedOption) => {
		//HAVE to be a whole object that is grabbing here
		setSelectedOption(selectedOption.map((e) => e));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("!selectedOption", selectedOption);
		if (
			!firstName ||
			!lastName ||
			!phoneNum ||
			!address ||
			!email ||
			!selectedOption ||
			!additionalInfo
		) {
			setHasErrorMessage(true);
			setTimeout(() => {
				setHasErrorMessage(false);
			}, 2000);
		} else {
			setHasErrorMessage(false);
			const customer = {
				first_name: firstName,
				last_name: lastName,
				phone_number: phoneNum,
				home_address: address,
				email_address: email,
				service: selectedOption.map((e) => e.value),
				additional_info: additionalInfo,
			};

			axios
				.post(`${URL}${PORT}/api/v1/customers`, customer)
				.then((res) => {
					setPost(post, res.data);
				})
				.catch((error) => {
					console.error("Error", error);
				});

			openSnackbar("You have submitted your request successfully!");
			setTimeout(() => {
				closeSnackbar();
			}, 3000);

			//Clear the form
			setAddress("");
			setEmail("");
			setPhoneNum("");
			setFirstName("");
			setLastName("");
			setAdditionalInfo("");
			setSelectedOption(null);
		}
	};

	return (
		<div className="estimate">
			<h1 className="estimate_title">Request An Estimate</h1>
			<form className="estimate_form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name" className="estimate_form_label">
						Name <span className="estimate_form_label-muted">(required)</span>
					</label>
					<div className="form-row">
						<div className="form-group col ">
							<label htmlFor="first_name" className="estimate_form_label">
								First Name
							</label>
							<input
								type="text"
								className="form-control form-control-lg"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="last_name" className="estimate_form_label">
								Last Name
							</label>
							<input
								type="text"
								className="form-control form-control-lg"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="phone_number" className="estimate_form_label">
						Phone <span className="estimate_form_label-muted">(required)</span>
					</label>
					<input
						type="number"
						className="form-control form-control-lg"
						value={phoneNum}
						onChange={(e) => setPhoneNum(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email_address" className="estimate_form_label">
						Email Address{" "}
						<span className="estimate_form_label-muted">(required)</span>
					</label>
					<input
						type="email"
						className="form-control form-control-lg"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="house_address" className="estimate_form_label">
						House Address{" "}
						<span className="estimate_form_label-muted">(required)</span>
					</label>
					<input
						type="text"
						className="form-control form-control-lg"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>

				<p className="estimate_form_label_bold">
					Select which service(s) you want:
				</p>
				<div className="form-check form-check-inline">
					<Select
						onChange={handleOption}
						defaultValue={selectedOption}
						isMulti
						value={selectedOption} //HAS to be an object key value pair
						name="service"
						options={options}
						className="form-check_options"
						classNamePrefix="select"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="additional_info" className="estimate_form_label">
						Any specific requests?
						<span className="estimate_form_label-muted">(required)</span>
					</label>
					<textarea
						type="text"
						className="form-control text-area"
						value={additionalInfo}
						onChange={(e) => setAdditionalInfo(e.target.value)}
					></textarea>
				</div>
				{hasErrorMessage && (
					<p className="text__error">This field can not be empty!</p>
				)}
				<span onClick={handleSubmit} type="submit" className="btn">
					Submit
				</span>
			</form>
		</div>
	);
};

export default Estimate;
