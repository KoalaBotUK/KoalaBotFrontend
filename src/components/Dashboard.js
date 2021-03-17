import React, { useContext } from "react";
import "../styling/home.css";
import { Timeline } from "react-twitter-widgets";
import { ThemeContext } from "../context/theme";

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <section className="baseSection" id="stats">
        <div className="left">
          <div className="row">
            <div className="vertical-container start">
              <h3>TOTAL MEMBERS</h3>
              <p>Online</p>
            </div>
            <div className="vertical-container end">
              <h3>1 340</h3>
              <p>820</p>
            </div>
          </div>
          <div className="row">
            <div className="vertical-container start">
              <h3>ENABLED EXTENSIONS</h3>
              <p>Add Extensions</p>
            </div>
            <div className="vertical-container end">
              <h3>3</h3>
            </div>
          </div>
          <div className="row">
            <div className="vertical-container start">
              <h3>KOALA PRO</h3>
              <p>Get access to Pro Extensions!</p>
            </div>
            <div className="vertical-container end">
              <h3>Go Pro</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <p>Graphs go here</p>
        </div>
      </section>

      <section className="baseSection" id="extensions">
        <div className="title-row">
          <h3>KOALA EXTENSIONS</h3>
          <div className="buttons">
            <div className="button">
              <i className="fa fa-plus-square"></i>
            </div>
            <div className="button">
              <i className="fa fa-cog"></i>
            </div>
          </div>
        </div>
        <div className="baseBorder">
          <div className="extensions-container">
            {/* These should be populated from the backend, the onClick should call the backend to change extensions enabled */}
            <div
              id="verifyEnabled"
              className={"pill light"}
              onClick={() =>
                document
                  .getElementById("verifyEnabled")
                  .classList.toggle("light")
              }
            >
              <p>Verify</p>
            </div>
            <div
              id="twitchEnabled"
              className={"pill light"}
              onClick={() =>
                document
                  .getElementById("twitchEnabled")
                  .classList.toggle("light")
              }
            >
              <p>Twitch Alert</p>
            </div>
            <div
              id="socialEnabled"
              className={"pill light"}
              onClick={() =>
                document
                  .getElementById("socialEnabled")
                  .classList.toggle("light")
              }
            >
              <p>Social Alert</p>
            </div>
          </div>
        </div>
      </section>

      <section className="baseSection" id="updates">
        <div className="left">
          <h3>NEW TICKETS</h3>
          <div className="baseBorder scroll-container vertical-container justify-start">
            <div className="ticket">
              <div className="ticket-head">
                <div className="profile-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="vertical-container">
                  <h3>CRISTAN BILNEY</h3>
                  <p>Just Now</p>
                </div>
              </div>
              <div className="ticket-body">
                <p>
                  Lorem Ipsum dolor sit ametm consectetur adipising elit, sed do
                  eiusmod tempor incidunt
                </p>
              </div>
            </div>
            <div className="ticket">
              <div className="ticket-head">
                <div className="profile-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="vertical-container">
                  <h3>HEDY VANETTI</h3>
                  <p>1 day ago</p>
                </div>
              </div>
              <div className="ticket-body">
                <p>
                  Lorem Ipsum dolor sit ametm consectetur adipising elit, sed do
                  eiusmod tempor incidunt
                </p>
              </div>
            </div>
            <div className="ticket">
              <div className="ticket-head">
                <div className="profile-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="vertical-container">
                  <h3>FRANCISCA TIREMAN</h3>
                  <p>54 days ago</p>
                </div>
              </div>
              <div className="ticket-body">
                <p>
                  Lorem Ipsum dolor sit ametm consectetur adipising elit, sed do
                  eiusmod tempor incidunt
                </p>
              </div>
            </div>
            <div className="ticket">
              <div className="ticket-head">
                <div className="profile-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="vertical-container">
                  <h3>JOSEPH WILLIAMS</h3>
                  <p>1 year ago</p>
                </div>
              </div>
              <div className="ticket-body">
                <p>
                  Lorem Ipsum dolor sit ametm consectetur adipising elit, sed do
                  eiusmod tempor incidunt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>
            KOALA UPDATES<i className="fab fa-twitter"></i>
          </h3>
          <div className="baseBorder scroll-container">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "KoalaBotUK",
              }}
              options={{ theme: theme }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
