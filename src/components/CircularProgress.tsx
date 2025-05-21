import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {
  remainingRequests: number;
  totalRequests: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ remainingRequests, totalRequests }) => {

  return (
    <div style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={remainingRequests}
        text={`${remainingRequests}/${totalRequests}`}
        styles={buildStyles({
          pathColor: `var(--primary-color)`,
          textColor: 'var(--primary-color)',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default CircularProgress;
