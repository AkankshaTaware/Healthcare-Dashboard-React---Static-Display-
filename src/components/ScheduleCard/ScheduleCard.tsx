import './ScheduleCard.css';

type Props = {
  type: string;
  time: string;
  icon: string;
  doctor: string;
  bg: string;
};

const ScheduleCard = ({ type, time, icon, doctor, bg }: Props) => {
  return (
     <div className={`schedule-card-item ${bg}`}>
      <div className="schedule-info">
        <h4 className="schedule-title">{type}</h4>
        <p className="schedule-time">{time}</p>
        <p className="schedule-doctor">{doctor}</p>
      </div>
      <div className="schedule-icon">{icon}</div>
    </div>
  );
};

export default ScheduleCard;
