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

import Link from 'next/link';
import { references } from '../../store/data';

const dummyPage = () => {
  let { githubLink } = references;

  return (
    <div className="container">
      <h1 className="font-heading color-primary">
        Hey, We're Still Working On This,
      </h1>
      <br />
      <h2 className="font-subheading text-align-center color-secondary">
        {' '}
        May Be Give Us Some Hand?
      </h2>
      <br />
      <br />
      <Link href="#" passHref>
        <a className="link">GitHub: {githubLink}</a>
      </Link>
    </div>
  );
};

export default dummyPage;
