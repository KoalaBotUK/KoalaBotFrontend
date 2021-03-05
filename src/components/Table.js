import React, { useContext } from "react";
import "../styling/home.css";
import "../styling/table.css";
import { ThemeContext } from "../context/theme";

const Table = (props) => {
	const theme = useContext(ThemeContext);
	
	const update_table = function(){
		let data = [
			{
				twitchStream: "3eakStefan",
				channel: "#streamers"
			},
			{
				twitchStream: "areallylongtwitchname",
				channel: "#streamers"
			},
			{
				twitchStream: "Koala_Dev_Team",
				channel: "#announcements"
			}
		]

		let tableBody = document.getElementById(props.config.id).children[1];
		tableBody.innerHTML = "";

		for (var i = data.length - 1; i >= 0; i--) {
			let row = data[i];
			tableBody.innerHTML += `<tr>
				<td>${row.twitchStream}</td>
				<td>${row.channel}</td>
				<td>hi</td>
			</tr>`
		}
	}


	let filterHTML;
	let rowsPerPageHTML;

	if(props.config.filter.enabled){
		filterHTML = <input className="tableInput" placeholder={props.config.filter.text}>
		
		</input>
	}

	if(props.config.paginate.enabled){
		rowsPerPageHTML = <p className="rowsPerPageText">
			<select className="rowsPerPage" onChange={update_table}>
			  <option value="10">10</option>
			  <option value="20">20</option>
			  <option value="50">50</option>
			</select>
			rows per page
		</p>
	}
	
	let topSection;
	if(props.config.filter.enabled || props.config.paginate.enabled){
		if(props.config.filter.enabled && props.config.paginate.enabled){
			topSection = 
			<div id="topSection" className="between">
				{filterHTML}
				{rowsPerPageHTML}
			</div>
		}else if(props.config.filter.enabled){
			topSection = 
			<div id="topSection" className="left">
				{filterHTML}
			</div>
		}else{
			topSection = 
			<div id="topSection" className="right">
				{rowsPerPageHTML}
			</div>
		}
	}

	let table;
		table = <table id={props.config.id}>
		<thead>
			<tr key="headers">
				{props.config.cols.map(function(object, i){
					return <th>
						{object.displayName}
						{object.orderable ? 
							<i className="fas fa-caret-down toggleSort"> </i>
							: <React.Fragment></React.Fragment>
						}
					</th>
				})}
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>3eakStefan</td>
				<td>#Streamers</td>
				<td>hi</td>
			</tr>
			<tr>
				<td>3eakStefan</td>
				<td>#Streamers</td>
				<td>hi</td>
			</tr>
			<tr>
				<td>3eakStefan</td>
				<td>#Streamers</td>
				<td>hi</td>
			</tr>
		</tbody>
	</table>

	return (
		<React.Fragment>
			{topSection}
			{table}
		</React.Fragment>
	);
};

export default Table;
