import React, { useState } from 'react';
import TimeIcon from './TimeIcon';
import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import './TimeSelector.css';

const TimeframeSelector: React.FC = props => {
  // const { handleSelect } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="TimeSelector">
      <TimeIcon />
      <h2 className="header">TIME FRAME</h2>
      <select
        className="dropdown"
        onClick={handleClick}
        // onSelect={handleSelect}
      >
        <option value="3600000">
          Past 60 Minutes {isClicked ? <ArrowUp /> : <ArrowDown />}
        </option>
        {/* Blue line */}
        <option value="86400000">Past Day</option>
        <option value="604800000">Past Week</option>
        {/* ms vary on month */}
        <option value="past month">Past Month</option>
        <option value="31449600000">Past Year</option>
      </select>
    </div>
  );
};

export default TimeframeSelector;
