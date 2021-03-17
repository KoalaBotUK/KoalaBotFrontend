import React from "react";
import { useHistory } from "react-router-dom";

import "../styling/bootstrap.scss";
import "../styling/landing.scss";

const Landing = ({
  developers = require("../assets/developers.json").developers,
}) => {
  let history = useHistory();

  const renderNavBar = () => {
    return (
      <div data-testid="landing_navbar" className="landing__nav">
        <div className="landing__nav__left">
          <div className="landing__btn landing__btn-border disabled">
            Sign Up
          </div>
          <div className="landing__btn disabled">Log In</div>
        </div>
        <div className="landing__nav__right">
          <div
            className="landing__btn"
            onClick={() => history.push("/dashboard")}
          >
            Dashboard
          </div>
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <div className="container">
          <div className="landing__header__row">
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
              <h1 className="landing__header__title">Koala</h1>
              <div className="landing__btn landing__btn-border disabled">
                Dashboard (Coming Soon)
              </div>
              <a
                href={`https://discord.com/api/oauth2/authorize?client_id=754669777347149844&permissions=8&scope=bot&#39;`}
              >
                <div className="landing__btn landing__btn-border discordBtn">
                  Add to Discord
                </div>
              </a>
            </div>
            <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <img
                className="landing__header__logo"
                src={require("../assets/img/KoalaBotLogo.png").default}
                alt="koala-logo"
              />
            </div>
          </div>
        </div>
        <div className="landing__header__divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#666666"
              fillOpacity="1"
              d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,80C840,64,960,64,1080,80C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </>
    );
  };

  const renderFeatures = () => {
    return (
      <div data-testid="features" id="features" className="landing__features">
        <div className="container">
          <div className="landing__features__title">
            <h2>Features</h2>
            <a href="#features"> </a>
          </div>
          <div className="landing__features__items">
            <div className="col-sm-6 col-lg-4 landing__features__item">
              <i className="fa fa-graduation-cap landing__features__item-icon" />
              <h3 className="landing__features__item-name">
                By Students, For Students
              </h3>
              <p className="landing__features__item-description">
                We are a group of developers from universities around the UK,
                including The University of Southampton and Imperial College
                London, and we are keen to create a bot that will be key to
                growing societies to new limits!
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 landing__features__item">
              <i className="fa fa-unlock landing__features__item-icon" />
              <h3 className="landing__features__item-name">Open Source</h3>
              <p className="landing__features__item-description">
                Our bot is completely open source to allow anyone to add
                additional functionality. We purposefully use an easy to learn
                programming language for out bot (python) to allow all students
                to edit and understand our code.
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 landing__features__item">
              <i className="fas fa-tachometer-alt landing__features__item-icon" />
              <h3 className="landing__features__item-name">Online Dashboard</h3>
              <p className="landing__features__item-description">
                To enable you to make changes to your bot's settings we are
                looking to create an online dashboard to allow admins to edit
                settings all from one webpage without needing to learn all the
                commands! Coming Soon!
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 landing__features__item">
              <i className="fas fa-flag landing__features__item-icon" />
              <h3 className="landing__features__item-name">
                One Bot To Rule Them All
              </h3>
              <p className="landing__features__item-description">
                A lot of bots are really good at one thing and to enable a lot
                of functionality you will need 4, 5 or even more discord bots!
                To prevent you from having to know all the different bot
                prefixes and uses we want to make a modular bot with many 'Koala
                Extensions' that can be enabled and disabled at will to give you
                more or less functionality.
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 landing__features__item">
              <i className="fas fa-edit landing__features__item-icon" />
              <h3 className="landing__features__item-name">
                Society Specific Functionality
              </h3>
              <p className="landing__features__item-description">
                We work with UK societies to find functionality key to them to
                enable their society to grow faster and easier. Koala extensions
                like 'Verify' allow students to verify their student email and
                gain a role automatically to view the rest of the server. We
                take feedback and suggestions to improve, alter and create our
                extensions to allow all societies to utilize Koala to its
                fullest!
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 landing__features__item">
              <i className="fas fa-comment landing__features__item-icon" />
              <h3 className="landing__features__item-name">
                Feedback And Suggestions
              </h3>
              <p className="landing__features__item-description">
                We have a support discord where people can easily contact the
                developers to give suggestions or bugs reports with ease!
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderInterviewVideo = () => {
    return (
      <section data-testid="interview" className="landing__interview">
        <div className="container">
          <i className="fas fa-play-circle landing__interview__icon" />
          <div className="landing__interview__title">
            Check out the interview
          </div>
          <div className="landing__interview__video landing__interview__video-wrapper ">
            <iframe
              title="interview"
              frameBorder="0"
              src="https://www.youtube.com/embed/4tQZRjVlLrM"
              className="embed-responsive-item"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </section>
    );
  };

  const renderLinkType = (link) => {
    if (!link)
      return (
        <div
          data-testid="missing-link-padding"
          className="landing__people__social"
        >
          {" "}
          <i className={`fa invisible`} />{" "}
        </div>
      );

    let logo = "fas fa-link";
    if (/linkedin.com/.test(link)) {
      logo = "fab fa-linkedin";
    } else if (/twitter.com/.test(link)) {
      logo = "fab fa-twitter";
    }

    return (
      <a
        data-testid="dev-link"
        target="_blank"
        rel="noopener noreferrer"
        className="landing__people__social"
        href={link}
      >
        <i className={`fa ${logo}`} />
      </a>
    );
  };

  const getDeveloperImage = (developer) => {
    try {
      return require(`../assets/img/developer_photos/${developer.pic}`).default;
    } catch (e) {
      return require(`../assets/img/developer_photos/default.png`).default;
    }
  };

  const renderDevs = () => {
    const devs = [<div />];

    developers.forEach((developer, index) => {
      devs.push(
        <div key={index} className="col-md-6 col-lg-4">
          <div className="landing__people__item">
            <img
              className="landing__people__pic"
              src={getDeveloperImage(developer)}
              loading="lazy"
              alt={`${developer.name}-profile`}
              data-testid="dev-image"
            />
            <div data-testid="dev-name" className="landing__people__name">
              {developer.name}
            </div>
            <div data-testid="dev-title" className="landing__people__title">
              {developer.title}
            </div>
            <div className="landing__people__links">
              {developer && developer.links ? (
                <>
                  {developer.links.linkedin &&
                    renderLinkType(developer.links.linkedin)}
                  {developer.links.twitter &&
                    renderLinkType(developer.links.twitter)}
                  {developer.links.website &&
                    renderLinkType(developer.links.website)}
                </>
              ) : (
                renderLinkType()
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div data-testid="devs" id="creators" className="container">
        <div key="a" className="landing__people">
          <a href="#creators">
            <div className="landing__people__header">The Team</div>
          </a>
        </div>
        <div className="landing__people__items">{devs}</div>
      </div>
    );
  };

  const renderBrandImage = (link, image) => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img
          alt="brand"
          className="landing__brands-logo"
          src={require(`../assets/img/${image}`).default}
        />
      </a>
    );
  };

  const renderBrands = () => {
    return (
      <div data-testid="brands" className="landing__brands">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#b3b3b3"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,192C672,181,768,171,864,165.3C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        <div className="landing__brands__logos">
          {renderBrandImage("http://svge.uk", "SVGE_LOGO.png")}
          {renderBrandImage("https://www.thenuel.com", "NUEL.png")}
          {renderBrandImage("https://discord.gg/SwanseaGG", "Swansea.png")}
          {renderBrandImage(
            "https://www.thestudentsunion.co.uk/soc/uweesportssociety",
            "UWE.png"
          )}
        </div>
      </div>
    );
  };

  const renderFooterLink = (link, type) => {
    return (
      <a
        className="landing__footer__socials-social"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        data-testid="dev_social_link"
      >
        <i className={`fab fa-${type}`}></i>
      </a>
    );
  };

  const renderFooter = () => {
    return (
      <footer data-testid="footer" className="landing__footer">
        <div className="landing__footer__socials">
          {renderFooterLink("https://twitter.com/KoalaBotUK", "twitter")}
          {renderFooterLink("http://discord.koalabot.uk", "discord")}
          {renderFooterLink("https://github.com/KoalaBotUK", "github")}
          {renderFooterLink(
            "https://linkedin.com/company/koalabotukK",
            "linkedin"
          )}
        </div>
        <div className="landing__footer__list">
          <div className="landing__footer__list-item">
            <a href="/">Home</a>
          </div>
          <div className="landing__footer__list-item">
            <a href="/dashboard">Dashboard</a>
          </div>
          <div className="landing__footer__list-item disabled">
            <div>About</div>
          </div>
          <div className="landing__footer__list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/16sw768rXd7c52FWeXrqHt0tTz3FoqN_O?usp=sharing"
            >
              Terms
            </a>
          </div>
          <div className="landing__footer__list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/16sw768rXd7c52FWeXrqHt0tTz3FoqN_O?usp=sharing"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <p className="landing__footer__copyright">KoalaBot © 2021</p>
      </footer>
    );
  };
  return (
    <div data-testid="landing" className="landing">
      <div>
        <div className="landing__header">
          {renderNavBar()}
          {renderHeader()}
        </div>
        <div className="landing__body">
          {renderFeatures()}
          {renderInterviewVideo()}
          {renderDevs()}
        </div>
        {renderBrands()}
        {renderFooter()}
      </div>
    </div>
  );
};

export default Landing;
