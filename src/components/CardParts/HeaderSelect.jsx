import { useState, useEffect } from "react";
import Select from "react-select";
import Laguages from "../../assets/Langs.json";

const customStyles = {
	control: (provided, state) => ({
		...provided,
		backgroundColor: "var(--header-color)", // Background color of the control
		borderColor: state.isFocused ? "#4f46e5" : "transparent", // Border color
		boxShadow: state.isFocused ? "0 0 0 1px #4f46e5" : "none", // Focus shadow
		color: "var(--background-color)",
		position: "relative",
		zIndex: "10",
		"&:hover": {
			borderColor: "#4f46e5", // Hover border color
		},
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? "#4f46e5" : "transparent", // Selected option background
		color: "white", // Selected option text color
		"&:hover": {
			backgroundColor: "#818cf8", // Hover background color
			color: "white", // Hover text color
		},
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: "var(--header-color)",
		borderRadius: "8px", // Menu border radius
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Menu shadow
		width: "150%",
	}),
	menuList: (provided) => ({
		...provided,
		height: "160px",
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: "var(--background-color)", // Dropdown arrow color
	}),
	input: (provided) => ({
		...provided,
		color: "#fff",
	}),
	singleValue: (provided) => ({
		...provided,
		color: "white", // Text color for single value
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		display: "none", // Text color for single value
	}),
	placeholder: (provided) => ({
		...provided,
		color: "white",
	}),
};

export default function HeaderSelect({
	type,
	handleChange,
	from,
	to,
	options,
}) {
	const [selectedOption, setSelectedOption] = useState(
		Laguages.find((lang) => lang.value === (type === "from" ? from : to)),
	);

	useEffect(() => {
		setSelectedOption(
			Laguages.find(
				(lang) => lang.value === (type === "from" ? from : to),
			),
		);
	}, [from, to]);

	return (
		<Select
			value={selectedOption}
			placeholder="Choose Language"
			onChange={(v) => handleChange(v, type)}
			options={options}
			styles={customStyles}
		/>
	);
}
