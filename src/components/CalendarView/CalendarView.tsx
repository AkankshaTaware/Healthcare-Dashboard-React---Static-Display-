
import "./Calendar.css";
import AppointmentCard from "../AppointmentCard/AppointmentCard";

const CalendarView = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const slots = [
    ["10:00", "11:00", "12:00"],
    ["08:00", "09:00", "10:00"],
    ["12:00", " -- ","13:00"],
    ["10:00", "11:00"," -- ",],
    [" -- ", "14:00", "16:00"],
    ["12:00"," 14:00 ", "15:00"],
    ["09:00", "10:00", "11:00"],
  ];

  return (
    <div className="calendar">
      <div className="calendar">
        <div className="icons">
          <button>+</button>
          <button>👤</button>
        </div>
        <div className="icons">
          <button>&rarr; </button>
          <button>&larr;</button>
        </div>
      
        <div className="header">
          <span>October 2021</span>
        </div>
        <div className="week">
          {days.map((day, i) => (
            <div key={i} className="day-column">
              <div className="day-label">{day}</div>
              <div className="date">{dates[i]}</div>
              {slots[i]?.map((slot, j) => (
                <div
                  key={j}
                  className={`slot ${
                    slot === "09:00" || slot === "11:00" ? "active" : ""
                  }`}
                >
                  {slot}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className= "appointments-section">
        <div className="appointments">
          <AppointmentCard
            type="Dentist"
            time="09:00-11:00"
            doctor="Dr. Cameron Williamson"
            icon="🦷"
            bg="dark"
          />
        </div>
        <div className="appointments">
          <AppointmentCard
            type="Physiotherapy Appointment"
            time="11:00-12:00"
            doctor="Dr. Kevin Djones"
            icon="💪"
            bg="light"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
