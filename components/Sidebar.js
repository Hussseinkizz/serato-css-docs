import SidebarMenu from './SidebarMenu';
import SidebarItem from './SidebarItem';
import { subLists } from '../store/data';

const Sidebar = () => {
  return (
    <aside className="sidebar scroll-auto">
      {/* <div className="divider-horizontal" /> */}
      <SidebarMenu />
      {/* sidebar items */}
      <div className="sidebar-items">
        {subLists.map((subList, index) => (
          <SidebarItem subList={subList} key={index} />
        ))}
      </div>

      <button className="button-primary sidebar-button">Contribute?</button>
    </aside>
  );
};

export default Sidebar;
