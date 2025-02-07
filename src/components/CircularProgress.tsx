import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {
  remainingRequests: number;
  totalRequests: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ remainingRequests, totalRequests }) => {
  const percentage = ((totalRequests - remainingRequests) / totalRequests) * 100;

  return (
    <div style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={remainingRequests}
        text={`${remainingRequests}/${totalRequests}`}
        styles={buildStyles({
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#3e98c7',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default CircularProgress;
