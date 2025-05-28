import { MdNotifications, MdAdd } from 'react-icons/md';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="logo">Health<span>care.</span></div>
    <input type="text" placeholder="Search..." className="search-bar" />
    <MdNotifications className="icon" />
    <div className="profile">
      <img src="/assets/avatar.png" alt="User" />
    </div>
    <MdAdd className="icon" />
  </div>
);

export default Header;
