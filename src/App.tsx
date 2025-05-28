import Sidebar from "./components/Sidebar/Sidebar";
import ActivityChart from "./components/ActivityChart/ActivityChart";
import CalendarView from "./components/CalendarView/CalendarView";
import Schedule from "./components/Schedule/Schedule";
import "./App.css";
import { FiBell,FiSearch,FiZoomIn } from "react-icons/fi";
import React, { useState } from "react";

// ✅ Move Dropdown outside App
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("This Week");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
      <div className="dropdown-toggle">{selected}</div>
      {isOpen && (
        <div className="dropdown-menu">
          {["This Week", "Last Week"].map((option) => (
            <div key={option} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ✅ App component
const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        {/* Dashboard Section */}
        <div className="dashboard">
          <div className="top-bar">
       
            <div className="search-bar">
                   <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <FiBell className="bell-icon" />
            </div>
          </div>
          <div className="dashboard-header">
            <h2>Dashboard</h2>
             <FiZoomIn className="zoom-icon" />
            <Dropdown />
          </div>

          <div className="dashboard-body">
            <div className="anatomy-area">
              <img src="https://i.ibb.co/8LZM0sCL/bg.png" alt="Anatomy" className="anatomy-image" />
              <button className="tag heart">❤️ Healthy Heart</button>
              <button className="tag leg">🦵 Healthy Leg</button>
            </div>

            <div className="cards-area">
              <div className="card">
                <img src="https://i.ibb.co/sdf3fS08/pngtree-human-organs-lungs-illustration-image-1323487-removebg-preview.png" alt="Lungs" className="card-icon" />
                <div>
                  <h4>Lungs</h4>
                  <p>Date: 26 Oct 2021</p>
                  <div className="progress red"></div>
                </div>
              </div>
              <div className="card">
                <img src="https://i.ibb.co/6RMQLjN4/Pngtree-tooth-dental-icon-design-template-4084609-removebg-preview.png" alt="Teeth" className="card-icon" />
                <div>
                  <h4>Teeth</h4>
                  <p>Date: 26 Oct 2021</p>
                  <div className="progress green"></div>
                </div>
              </div>
              <div className="card">
                <img src="https://i.ibb.co/wk9xYTf/Pngtree-bone-stick-small-bone-cartoon-3854898-removebg-preview.png" alt="Bone" className="card-icon" />
                <div>
                  <h4>Bone</h4>
                  <p>Date: 26 Oct 2021</p>
                  <div className="progress orange"></div>
                </div>
              </div>
              <div className="icons">
                <button> Details &rarr;</button>
              </div>
            </div>
          </div>

          <div className="activity-area">
            <ActivityChart />
          </div>
        </div>

        {/* Right Section */}
        <div className="calendar-schedule">
          <CalendarView />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default App;
