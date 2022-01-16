import * as VscIcons from 'react-icons/vsc';

const SidebarItem = ({ subList }) => {
  // console.log(subList);

  return (
    <>
      {/* sidebar item */}
      <div className="sidebar-item">
        <h3 className="list-title">
          <VscIcons.VscDebugBreakpointData className="list-title-icon font-size-icon" />
          <span className="list-title-text font-size-large margin-left-1">
            {subList.title}
          </span>
        </h3>
        <ul className="list sidebar-list">
          {subList.items.map((item) => (
            <li className="list-item list-style-none" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarItem;
