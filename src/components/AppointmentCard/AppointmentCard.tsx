import React from 'react';
import './AppointmentCard.css';

interface AppointmentCardProps {
  type: string;
  time: string;
  icon: React.ReactNode;
  doctor: string;
  bg: string; // 'light' or 'dark'
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  type,
  time,
  icon,
  doctor,
  bg,
}) => (
  <div className={`appointment-card ${bg}`}>
    <div className="icon">{icon}</div>
    <div className="content">
      <div className="title">{type}</div>
      <div className="sub">{time}</div>
      <div className="sub">{doctor}</div>
    </div>
  </div>
);

export default AppointmentCard;
