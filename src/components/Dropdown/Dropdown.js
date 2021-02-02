import "./Dropdown.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Dropdown = ({ onLocationChange }) => {
	const styles = theme => ({
		select: {
			"&:before": {
				borderColor: "#00b4d8",
			},
			"&:after": {
				borderColor: "#00b4d8",
			},
			"&:hover:not($disabled):after": {
				borderColor: "#00b4d8",
			},
			"&:hover:not($disabled):before": {
				borderColor: "#00b4d8",
			},
			"&:hover": {
				borderColor: "#00b4d8",
			},
			color: "rgba(255, 255, 255, 0.8)",
		},
		icon: {
			color: "#00b4d8",
		},
	});

	const MySelect = ({ classes }) => (
		<FormControl className="dropdown">
			<NativeSelect
				className={classes.select}
				inputProps={{
					classes: {
						icon: classes.icon,
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
	);

	const MySelectWithStyles = withStyles(styles)(MySelect);

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
			{/* <MySelectWithStyles /> */}
		</>
	);
};

export default Dropdown;
