import "./Dropdown.css";
import { NativeSelect, FormControl } from "@material-ui/core";

const Dropdown = ({ onLocationChange }) => {
	return (
		<>
			<FormControl className="dropdown">
				<NativeSelect
					className="dropdown-select"
					inputProps={{
						classes: {
							icon: "arrow",
						},
					}}
					defaultValue="canada"
					onChange={e => onLocationChange(e.target.value)}
				>
					<option value="canada"> Canada</option>
					<option value="AB"> Alberta</option>
					<option value="BC"> British Columbia</option>
					<option value="MB"> Manitoba</option>
					<option value="NB"> New Brunswick</option>
					<option value="NL"> Newfoundland and Labrador</option>
					<option value="NT"> Northwest Territories</option>
					<option value="NS"> Nova Scotia</option>
					<option value="NU"> Nunavut</option>
					<option value="ON"> Ontario</option>
					<option value="nd"> Prince Edward Island</option>
					<option value="QC"> Quebec</option>
					<option value="SK"> Saskatchewan</option>
					<option value="YT"> Yukon</option>
				</NativeSelect>
			</FormControl>
		</>
	);
};

export default Dropdown;
