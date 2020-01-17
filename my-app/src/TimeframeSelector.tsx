import React, { useState } from 'react';
import TimeIcon from './TimeIcon';
import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import './TimeSelector.css';

const TimeframeSelector: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState('');

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSelect = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIsSelected(event.target.value);
    //thunk for api request for top three performers in that timeframe
  };

  return (
    <div className="TimeSelector">
      <TimeIcon />
      <h2 className="header">TIME FRAME</h2>
      <select
        className="dropdown"
        onClick={handleClick}
        onChange={handleSelect}
      >
        <option value="past 60 minutes">
          Past 60 Minutes {isClicked ? <ArrowUp /> : <ArrowDown />}
        </option>
        {/* Blue line */}
        <option value="past day">Past Day</option>
        <option value="past week">Past Week</option>
        <option value="past month">Past Month</option>
        <option value="past year">Past Year</option>
      </select>
    </div>
  );
};

export default TimeframeSelector;
