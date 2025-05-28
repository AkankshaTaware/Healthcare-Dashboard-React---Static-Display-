// src/components/ScheduleCard.jsx
import React from "react";
import "./ScheduleCard.css";
type Appointment = {
  type: string;
  time: string;
  icon: string;
  [key: string]: unknown;
  doctor: string;
  bg: string;
};

const ScheduleCard: React.FC<Appointment> = ({ type, time, icon }) => {
  return (
    <div className="schedule-card">
      <div className="title-row">
        <span className="title">{type}</span>
        <div className="time">{time}</div>
      </div>
      {icon && <span className="icon">{icon}</span>}
    </div>
  );
};

export default ScheduleCard;
