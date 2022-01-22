import { useStore } from '../store/store';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/serato.svg';
import * as IoIcons from 'react-icons/io5';

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

  return (
    <header className="page-header">
      <nav className="navbar">
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
            <Link href="/">
              <a className="navbar-link">Serato CSS</a>
            </Link>
            <span className="version-note padding-x-2 padding-y-1 background-indigo-200 border-radius-small font-size-small font-light margin-left-1">
              V1.0.3
            </span>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-items">
            <Link href="/getting-started" className="navbar-item">
              <a className="navbar-link color-purple-200--hoverable text-decoration-none">
                Getting Started
              </a>
            </Link>
            <Link href="/components" className="navbar-item">
              <a className="navbar-link color-purple-200--hoverable text-decoration-none">
                Components
              </a>
            </Link>
            <Link href="/request-feature" className="navbar-item">
              <a className="navbar-link color-purple-200--hoverable text-decoration-none">
                Request Feature?
              </a>
            </Link>
          </div>
          <div className="navbar-icons">
            <Link href="https://youtube.com/SeratoCss">
              <a target="_blank">
                <IoIcons.IoLogoYoutube className="iconic-button--no-background font-size-icon color-secondary--hoverable" />
              </a>
            </Link>
            <Link href="https://twitter.com/SeratoCss">
              <a target="_blank">
                <IoIcons.IoLogoTwitter className="iconic-button--no-background font-size-icon color-secondary--hoverable" />
              </a>
            </Link>
            <Link href="https://github.com/Hussseinkizz/serato-css">
              <a target="_blank">
                <IoIcons.IoLogoGithub className="iconic-button--no-background font-size-icon color-secondary--hoverable" />
              </a>
            </Link>
          </div>
          <Link href="https://github.com/Hussseinkizz/serato-css/raw/master/seratocss-v1.0.5.zip">
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
