import ScheduleCard from "../ScheduleCard/ScheduleCard"
import { upcomingSchedule } from "../../data/appointments"; // Updated import path
import "./Schedule.css";

// Define the type for an appointment based on the data exported in appointments.ts
type Appointment = {
  type: string;
  time: string;
  icon: string;
  [key: string]: unknown;
  doctor: string;
  bg: string;
};

type UpcomingSchedule = {
  [day: string]: Appointment[];
};

const Schedule = () => {
  return (
    <div className="schedule">
      <h3>The Upcoming Schedule</h3>
      {Object.entries(upcomingSchedule as unknown as UpcomingSchedule).map(
        ([day, appointments]) => (
          <div  className="schedule-card1" key={day}>
            <h5>On {day}</h5>
            <div className="schedule-card">
              {appointments.map((appt, i) => (
                <ScheduleCard key={i} {...appt} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Schedule;
