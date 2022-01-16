import Link from 'next/link';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';

const SidebarMenu = () => {
  return (
    <>
      <ul className="list sidebar-menu margin-top-9">
        <Link href="/">
          <li className="menu-item color-primary--hoverable">
            <RiIcons.RiHome7Fill class="menu-item-icon font-size-icon" />
            <span className="menu-item-text font-size-large margin-left-1">
              Welcome
            </span>
          </li>
        </Link>
        <Link href="/why-serato-css">
          <li className="menu-item color-primary--hoverable">
            <IoIcons.IoHelpCircle class="menu-item-icon font-size-icon" />
            <span className="menu-item-text font-size-large margin-left-1">
              Why Serato CSS?
            </span>
          </li>
        </Link>
        <Link href="/getting-started">
          <li className="menu-item color-primary--hoverable">
            <RiIcons.RiLightbulbFlashFill class="menu-item-icon font-size-icon" />
            <span className="menu-item-text font-size-large margin-left-1">
              Getting Started
            </span>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default SidebarMenu;
