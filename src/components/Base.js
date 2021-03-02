import React, { useEffect } from "react";

import { ThemeProvider } from "../context/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";

import "../styling/base.css";
import "../styling/hamburger.css";
import "../styling/helpers.css";

const Base = ({ children }) => {
  const [theme, updateTheme] = useLocalStorage("theme", "light");

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
  const toggleFullNavigationBar = () => {
    document.getElementById("nav").classList.toggle("active");

    Array.prototype.forEach.call(
      document.getElementsByClassName("hamburger"),
      function (el) {
        el.classList.toggle("active");
      }
    );
  };

  const renderDarkModeButton = () => {
    return (
      <>
        <p>Dark Mode</p>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => toggleDarkMode()}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </>
    );
  };

  return (
    <>
      <nav id="nav">
        <a href={() => false} onClick={() => toggleFullNavigationBar()}>
          <div className="icon">
            <i className="hamburger">
              <span></span>
            </i>
          </div>
        </a>
        <a href={() => false} className="dark">
          <div className="icon">
            <i className="fa fa-search fa-lg"></i>
          </div>
          <input type="text" name="" />
        </a>
        <a className="dark" href="/">
          <div className="icon">
            <i className="fa fa-th-large fa-lg"></i>
          </div>
          <p>Dashboard</p>
        </a>
        <a className="dark" href="/settings">
          <div className="icon">
            <i className="fa fa-cog fa-lg"></i>
          </div>
          <p>Settings</p>
        </a>
        <a href="/verify">
          <div className="icon">
            <i className="fa fa-check fa-lg"></i>
          </div>
          <p>Verify</p>
        </a>
        <a href="/twitch">
          <div className="icon">
            <i className="fab fa-twitch fa-lg"></i>
          </div>
          <p>Twitch Notify</p>
        </a>
        <a href="/socialalert">
          <div className="icon">
            <i className="fas fa-users fa-lg"></i>
          </div>
          <p>Social Alert</p>
        </a>
      </nav>
      <div className="content">
        <header>
          {renderDarkModeButton()}
          <div className="vertical-container end">
            <h4>Username#0000</h4>
            <p>Koala Dev</p>
          </div>
          <div className="profile-icon">
            <i className="fas fa-user"></i>
          </div>
        </header>

        <main>
          <ThemeProvider value={theme}>{children}</ThemeProvider>
        </main>

        <footer>
          <p>© KoalaBotUK 2020</p>
        </footer>
      </div>
    </>
  );
};

export default Base;
