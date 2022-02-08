import { useStore } from '../store/store';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/serato.svg';
import * as IoIcons from 'react-icons/io5';
import Cookies from 'js-cookie';

const MobileHeader = () => {
  const {
    state: { navState, darkMode },
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
    <header className="header-mobile background-primary width-full padding-x-4">
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
            <Link href="/">
              <a className="navbar-link color-gray-200--hoverable font-bold text-decoration-none font-size-large text-uppercase">
                Serato CSS
              </a>
            </Link>
            <span className="version-note padding-x-2 padding-y-1 background-indigo-200 border-radius-small font-size-small font-light margin-left-1">
              V1.0.3
            </span>
          </div>
        </div>
        <div className="navbar-end flex justify-content-flex-end flex-basis-content">
          {/* Dark Mode Switch */}
          <button
            className="darkmode-switch button"
            onClick={darkModeChangeHandler}
          >
            {darkMode ? '🌚' : '🌞'}
          </button>
          {/* navbar hamburger */}
          <button onClick={() => dispatch({ type: 'TOGGLE_NAV' })}>
            {navState ? (
              <IoIcons.IoClose className="iconic-button font-size-icon padding-1 color-custom-secondary--hoverable border-radius-normal" />
            ) : (
              <IoIcons.IoMenu className="iconic-button font-size-icon padding-1 color-custom-secondary--hoverable border-radius-normal" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
