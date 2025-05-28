import './Chart.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const ActivityChart = () => {
  const data = days.map(() => [
    30 + Math.random() * 40, // gray
    40 + Math.random() * 50, // cyan
    20 + Math.random() * 50  // purple
  ]);

  return (
    <div className="chart">
      <div className="chart-head">
        <h3>Activity</h3>
        <span>3 appointments this week</span>
      </div>

      <div className="chart-bars">
        {data.map((heights, idx) => (
          <div className="bar-col" key={idx}>
            <div className="bar-set">
              <div className="bar bg-gray" style={{ height: `${heights[0]}px` }} />
              <div className="bar bg-cyan" style={{ height: `${heights[1]}px` }} />
              <div className="bar bg-purple" style={{ height: `${heights[2]}px` }} />
            </div>
            <span className="day">{days[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
