import Link from 'next/link';
import * as IoIcons from 'react-icons/io5';
import { references } from '../store/data';
import { useStore } from '../store/store';
import Fade from 'react-reveal/Fade';

const NavbarOpen = () => {
  const [{ downloadLink, youtubeLink, twitterLink, githubLink }] = references;
  const {
    state: { navState, darkMode },
    dispatch,
  } = useStore();

  return (
    <Fade fromTop>
      <nav className="open-navbar flex-column background-gray-100 padding-2 border-radius-normal">
        <ul className="navbar-links border-bottom-on-all-children margin-y-smallest-on-children">
          <li>
            <Link href="/getting-started" className="navbar-item">
              <a
                className="navbar-link color-primary--hoverable text-decoration-none"
                onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
              >
                Getting Started
              </a>
            </Link>
          </li>
          <li>
            <Link href="/components" className="navbar-item">
              <a
                className="navbar-link color-primary--hoverable text-decoration-none"
                onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
              >
                Components
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contributions-and-features" className="navbar-item">
              <a
                className="navbar-link color-primary--hoverable text-decoration-none"
                onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
              >
                Request Feature?
              </a>
            </Link>
          </li>
        </ul>
        <div className="navbar-icons">
          <Link href={youtubeLink.item}>
            <a
              target="_blank"
              onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
            >
              <IoIcons.IoLogoYoutube className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
            </a>
          </Link>
          <Link href={twitterLink.item}>
            <a
              target="_blank"
              onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
            >
              <IoIcons.IoLogoTwitter className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
            </a>
          </Link>
          <Link href={githubLink.item}>
            <a
              target="_blank"
              onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
            >
              <IoIcons.IoLogoGithub className="iconic-button--no-background font-size-icon color-custom-secondary--hoverable" />
            </a>
          </Link>
        </div>
        <Link href={downloadLink.item}>
          <button
            className={`button ${darkMode && 'button-dark'}`}
            onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
          >
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
      </nav>
    </Fade>
  );
};

export default NavbarOpen;
