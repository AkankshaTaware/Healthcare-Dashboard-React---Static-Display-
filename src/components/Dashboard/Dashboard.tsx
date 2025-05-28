
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import CalendarView from '../CalendarView/CalendarView';
import ActivityChart from '../ActivityChart/ActivityChart';
import Schedule from '../Schedule/Schedule';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-main">
    <AppointmentCard type="Meeting" time="10:00 AM" icon="calendar" doctor='' bg='' />
    <CalendarView />
    <ActivityChart />
    <Schedule />
  </div>
);

export default Dashboard;
