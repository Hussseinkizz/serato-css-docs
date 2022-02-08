import Link from 'next/link';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';
import { useStore } from '../store/store';

const SidebarMenu = () => {
  const {
    state: { sidebarState, darkMode },
    dispatch,
  } = useStore();

  return (
    <>
      <div className="sidebar-menu margin-bottom-2 padding-x-1 background-gray-100 padding-bottom-4">
        {/* sidebar toggle */}
        <button
          className="sidebar-toggle iconic-button font-size-icon color-custom-secondary--hoverable border-radius-normal"
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        >
          {sidebarState ? (
            <HiIcons.HiChevronDoubleLeft />
          ) : (
            <HiIcons.HiChevronDoubleRight />
          )}
        </button>

        <Link href="/" passHref>
          <div className="sidebar-menu-item color-primary--hoverable margin-top-4">
            <RiIcons.RiHome7Fill className="menu-item-icon font-size-icon" />
            <span className="menu-item-text font-size-large">Welcome</span>
          </div>
        </Link>

        <Link href="/why-serato-css" passHref>
          <div className="sidebar-menu-item color-primary--hoverable">
            <IoIcons.IoHelpCircle className="menu-item-icon font-size-icon" />
            <span className="menu-item-text font-size-large">
              Why Serato CSS?
            </span>
          </div>
        </Link>

        <Link href="/getting-started" passHref>
          <div className="sidebar-menu-item color-primary--hoverable">
            <RiIcons.RiLightbulbFlashFill className="menu-item-icon font-size-icon" />
            <span className="menu-item-text font-size-large">
              Getting Started
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarMenu;
