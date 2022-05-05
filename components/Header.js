import { useStore } from '../store/store';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/serato.svg';
import * as IoIcons from 'react-icons/io5';
import { references } from '../store/data';

import Cookies from 'js-cookie';

const Header = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useStore();

  const darkModeChangeHandler = () => {
    dispatch({
      type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON',
    });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  const [{ downloadLink, youtubeLink, twitterLink, githubLink }] = references;

  return (
    <header className="header background-primary width-full padding-x-4">
      <nav
        className="navbar display-flex justify-content-between align-items-center grow-1 shrink-1 gap-2
      "
      >
        <div className="navbar-start">
          <div className="navbar-brand">
            {/* <Image
              src={require('../public/serato.svg')}
              alt="serato css logo"
              className="navbar-logo"
              width="32"
              height="32"
            /> */}
            <Image
              src={Logo}
              alt="serato css logo"
              className="navbar-logo"
              width="32"
              height="32"
            />
            <Link href="/" passHref>
              <a className="navbar-link color-gray-200--hoverable font-bold text-decoration-none font-size-large text-uppercase">
                Serato CSS
              </a>
            </Link>
            <span className="version-note padding-x-2 padding-y-1 background-indigo-200 border-radius-small font-size-small font-light margin-left-1">
              V1.0.5
            </span>
          </div>
        </div>
        <div className="navbar-end flex justify-content-flex-end flex-basis-content">
          <div className="navbar-items">
            <Link href="/getting-started" className="navbar-item" passHref>
              <a className="navbar-link color-purple-200--hoverable text-decoration-none">
                Getting Started
              </a>
            </Link>
            <Link href="/components" className="navbar-item" passHref>
              <a className="navbar-link color-purple-200--hoverable text-decoration-none">
                Components
              </a>
            </Link>
            <Link
              href="/contributions-and-features"
              className="navbar-item"
              passHref
            >
              <a className="navbar-link color-purple-200--hoverable text-decoration-none">
                Request Feature?
              </a>
            </Link>
          </div>
          <div className="navbar-icons">
            <Link href={youtubeLink.item} passHref>
              <a target="_blank">
                <IoIcons.IoLogoYoutube className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
              </a>
            </Link>
            <Link href={twitterLink.item} passHref>
              <a target="_blank">
                <IoIcons.IoLogoTwitter className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
              </a>
            </Link>
            <Link href={githubLink.item} passHref>
              <a target="_blank">
                <IoIcons.IoLogoGithub className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
              </a>
            </Link>
          </div>
          <Link href={downloadLink.item} passHref>
            <button className={`button ${darkMode && 'button-dark'}`}>
              <a
                target="_blank"
                className={`text-decoration-none ${
                  darkMode && 'color-gray-200--hoverable'
                }`}
              >
                Download
              </a>
            </button>
          </Link>
          {/* Dark Mode Switch */}
          <button
            className="darkmode-switch button"
            onClick={darkModeChangeHandler}
          >
            {darkMode ? '🌚' : '🌞'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
