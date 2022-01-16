// import { useStore } from '../store/store';
import Meta from './Meta';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  // const { state } = useStore();
  // const { darkMode } = state;

  return (
    <>
      <Meta />
      {/* Using Serato CSS's standard layout */}
      <div className="app page-layout-standard width-full">
        <Header />
        <main className="page-content">
          <Sidebar />
          <section className="main-section">{children}</section>
        </main>
      </div>
    </>
  );
};

export default Layout;
