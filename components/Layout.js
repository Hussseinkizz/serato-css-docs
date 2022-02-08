import { useStore } from '../store/store';
import Meta from './Meta';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import NavbarOpen from './NavbarOpen';
import SidebarMobile from './SidebarMobile';

const Layout = ({ children }) => {
  const {
    state: { navState, sidebarState, darkMode },
    dispatch,
  } = useStore();

  return (
    <>
      <Meta />
      {/* Using A Custom Layout */}
      <div
        className={`app width-full height-viewport position-relative ${
          darkMode && 'background-gray-900 color-gray-200'
        }`}
        onClick={() => dispatch({ type: navState && 'HIDE_NAV' })}
      >
        {/* app header / app bar */}
        <div className="app-header position-sticky top-0">
          <Header />
          <MobileHeader />
        </div>
        {/* app sidebar and mobile navbar */}
        <section className="display-flex">
          {navState && <NavbarOpen />}
          <Sidebar />
          {sidebarState && <SidebarMobile />}
          {/* app content / main */}
          <main className="main-content responsive-padding-x-medium padding-y-6">
            {children}
          </main>
        </section>
      </div>
    </>
  );
};

export default Layout;
