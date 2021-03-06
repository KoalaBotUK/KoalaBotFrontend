import React, { useEffect } from "react";

import { ThemeProvider } from "../context/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { openCookieBanner, acceptCookies } from "../context/cookies";

import "../styling/base.css";
import "../styling/hamburger.css";
import "../styling/helpers.css";

const Base = ({ children }) => {
  const [theme, updateTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    openCookieBanner();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    if (theme === "dark") {
      updateTheme("light");
    } else {
      updateTheme("dark");
    }
  };

  // TODO - refactor this to use useState to change active and inactive nav bar
  const openNavigationBar = () => {
    document.getElementById("nav").classList.add("active");

    Array.prototype.forEach.call(
      document.getElementsByClassName("baseHamburger"),
      function (el) {
        el.classList.add("active");
      }
    );
  };

  function toggleFullNavigationBar() {
    document.getElementById("nav").classList.toggle("active");

    Array.prototype.forEach.call(
      document.getElementsByClassName("baseHamburger"),
      function (el) {
        el.classList.toggle("active");
      }
    );
  }

  const renderDarkModeButton = () => {
    return (
      <>
        <p>Dark Mode</p>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => toggleDarkMode()}
            checked={theme === "dark"}
            data-testid="dark-switch"
          />
          <span className="darkModeSlider round"></span>
        </label>
      </>
    );
  };

  return (
    <>
      <nav className="baseNav" data-testid="sidebar" id="nav">
        <a
          data-testid="sidebar-hamburger"
          href={() => false}
          onClick={() => toggleFullNavigationBar()}
        >
          <div className="baseIcon">
            <i className="baseHamburger">
              <span className="hamSpan"></span>
            </i>
          </div>
        </a>
        <a
          data-testid="sidebar-search"
          href={() => false}
          className="dark"
          onClick={() => {
            openNavigationBar();
            setTimeout(() => {
              document.getElementById("navSearchInput").focus();
            }, 200);
          }}
        >
          <div className="baseIcon">
            <i className="fa fa-search fa-lg"></i>
          </div>
          <input type="text" name="" id="navSearchInput"></input>
        </a>
        <a className="dark" href="/dashboard">
          <div className="baseIcon">
            <i className="fa fa-th-large fa-lg"></i>
          </div>
          <p>Dashboard</p>
        </a>
        <a className="dark" href="/dashboard/settings">
          <div className="baseIcon">
            <i className="fa fa-cog fa-lg"></i>
          </div>
          <p>Settings</p>
        </a>
        <a href="/dashboard/verify">
          <div className="baseIcon">
            <i className="fa fa-check fa-lg"></i>
          </div>
          <p>Verify</p>
        </a>
        <a href="/dashboard/twitch">
          <div className="baseIcon">
            <i className="fab fa-twitch fa-lg"></i>
          </div>
          <p>Twitch Notify</p>
        </a>
        <a href="/dashboard/socialalert">
          <div className="baseIcon">
            <i className="fas fa-users fa-lg"></i>
          </div>
          <p>Social Alert</p>
        </a>
      </nav>
      <div className="content">
        <header className="baseHeader" data-testid="header">
          <div className="headerLeftSection">
            <img
              alt="koala_logo"
              src={require("../assets/img/KoalaBotLogo.png").default}
              id="headerLogo"
            />
          </div>
          <div className="headerRightSection">
            {renderDarkModeButton()}
            <div className="vertical-container end">
              <h4>Username#0000</h4>
              <p>Koala Dev</p>
            </div>
            <div className="profile-icon">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </header>

        <main data-testid="main-content">
          <ThemeProvider value={theme}>{children}</ThemeProvider>
        </main>

        <footer className="baseFooter" data-testid="footer">
          <p>© KoalaBotUK 2020</p>
        </footer>
      </div>
      <div data-testid="cookies" id="cookieBanner" className="cookieBanner">
        <div id="cookieContainer">
          <p>
            This site uses cookies, by using this site you are accepting that.
          </p>
          <div
            data-testid="cookies-accept"
            className="button"
            onClick={() => acceptCookies()}
          >
            Accept
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
