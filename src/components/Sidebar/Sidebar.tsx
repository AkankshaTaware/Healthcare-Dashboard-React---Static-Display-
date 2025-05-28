import { navLinks } from '../../data/navigationLinks';
import * as Icons from 'react-icons/md';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    {/* Top logo */}
    <div className="sidebar-header">
      <h2 className="sidebar-logo">
        Health<span className="highlight">care.</span>
      </h2>
    </div>

    {/* Scrollable content */}
    <div className="sidebar-scrollable">
      <div className="sidebar-section">
        <h4 className="sidebar-title">General</h4>
        <ul className="nav-list">
          {navLinks.map(({ name, icon }) => {
            const Icon = Icons[icon as keyof typeof Icons];
            return (
              <li key={name} className="nav-item">
                <Icon size={20} className="nav-icon" />
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-footer">
        <h4 className="sidebar-title">Tools</h4>
        <ul className="nav-list">
          <li className="nav-item">
            <Icons.MdChat size={20} className="nav-icon" />
            <span>Chat</span>
          </li>
          <li className="nav-item">
            <Icons.MdSupport size={20} className="nav-icon" />
            <span>Support</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Setting at bottom */}
    <div className="sidebar-bottom">
      <li className="nav-item">
        <Icons.MdSettings size={20} className="nav-icon" />
        <span>Setting</span>
      </li>
    </div>
  </div>
);

export default Sidebar;
