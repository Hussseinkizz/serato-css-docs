import * as VscIcons from 'react-icons/vsc';
import { sidebarLists } from '../store/data';
import SidebarMenu from './SidebarMenu';
import Meta from './Meta';
import Link from 'next/link';

const Sidebar = () => {
  // use this to make list title to lowercase depiste it's uppercase in data!
  const toLowerCase = (titleString) => titleString.toLowerCase();

  // modifying makeSlug hook code to generate slugs for each list item!
  const makeSlug = (nameString) => {
    let formattedName = nameString.toLowerCase();
    let arr = formattedName.split(' ');
    let slugValue = arr.reduce(
      (initialValue, nextValue) => initialValue + '-' + nextValue
    );
    return slugValue;
  };

  return (
    <>
      <aside className="sidebar width-content flex-column shrink-0 grow-0 flex-basis-content overflow-hidden padding-bottom-4">
        {/* sidebar menu */}
        <SidebarMenu />

        {/* sidebar list */}
        <div className="sidebar-lists overflow-x-hidden grow-1 padding-x-1 margin-y-smaller-on-children">
          {sidebarLists.map((list, i) => (
            <div className="sidebar-list" key={i}>
              <h3 className="list-header flex align-items-center color-primary">
                <VscIcons.VscDebugBreakpointData className="list-header-icon font-size-icon" />
                {/* sidebar list title */}
                <span className="list-header-text font-size-large">
                  {list.title}
                </span>
              </h3>

              {/* sidebar list items and their links */}
              <ul className="sidebar-list-content list margin-left-1">
                {/* 📋 Note: The route to each specific item is tied with the project's pages directory structure, it's a hack but it works! */}
                {list.items.map((listItem, i) => (
                  <li className="sidebar-list-item list-style-none" key={i}>
                    <Meta
                      title={`Serato CSS - ${listItem}`}
                      keywords={listItem}
                    />
                    <Link
                      href={`/${toLowerCase(list.title)}/${makeSlug(
                        listItem
                      )}/${makeSlug(listItem)}
                      }`}
                      passHref
                    >
                      <span className="list-item color-gray-600 color-gray-400-on-hover">
                        {listItem}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* sidebar action button */}
        <Link href="/contributions-and-features" passHref>
          <button className="sidebar-action-button button-primary margin-x-2">
            Contribute?
          </button>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
