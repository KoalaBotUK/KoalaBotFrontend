import React, { useContext } from "react";
import "../styling/home.css";
import "../styling/cogSection.css";
import { ThemeContext } from "../context/theme";

const CogSection = (props) => {
	const theme = useContext(ThemeContext);
	return (
		<React.Fragment>
			<section className="cogSection" style={props.style}>
				<h2 className="cogSectionTitle">
					{props.name}
				</h2>
				<div className="cogSectionBody">
					{props.children}
				</div>
			</section>
		</React.Fragment>
	);
};

export default CogSection;
