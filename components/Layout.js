import Meta from './Meta';
import Header from './Header';
import Sidebar from './Sidebar';
import { useStore } from '../store/store';

const Layout = ({ children }) => {
  const {
    state: { darkMode },
  } = useStore();

  return (
    <>
      <Meta />
      {/* Using Serato CSS's standard layout */}
      <div
        className={`app page-layout-standard width-full ${
          darkMode && 'background-gray-900 color-gray-200'
        }`}
      >
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
