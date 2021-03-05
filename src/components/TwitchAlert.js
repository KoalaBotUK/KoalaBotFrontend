import React from "react";
import "../styling/home.css";

import CogSection from "./CogSection";
import Table from "./Table";

const TwitchAlert = () => {
  return (
  	<React.Fragment>
  		<CogSection name="Twitch Alert">
  			<div className="button">
  				<i className="fab fa-twitch fa-lg" style={{marginRight:"10px"}}></i>
  				Add New Twitch Alert
  			</div>
  			<hr/>
  			<Table
  				config={{
  					id:"twitchAlertTable",
  					paginate:{
  						enabled:true
  					},
  					filter:{
  						enabled: true,
  						text: "Filter by stream...",
  						filterOnColumnId: "twitchStream"
  					},
  					cols:[
  						{
  							orderable: true,
  							displayName: "Twitch Stream",
  							id: "twitchStream",
  							data: true
  						},
  						{
  							orderable: true,
  							displayName: "Channel",
  							id: "channel",
  							data: true
  						},
  						{
  							orderable: false,
  							displayName: "Options",
  							id:"options",
  							centered: true,
  							data: false
  						}
  					]
  				}}
  			>
  			</Table>
  		</CogSection>
  	</React.Fragment>
  );
};

export default TwitchAlert;
