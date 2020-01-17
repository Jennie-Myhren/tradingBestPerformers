import React, { useState } from 'react';
import './App.css';
import TimeframeSelector from './TimeframeSelector';
import BestPerformers from './BestPerformers';
import SelectedAssets from './SelectedAssets';
import GraphDisplay from './GraphDisplay';

const App: React.FC = () => {
  //Typescript troubleshooting precluded some progress:
  //I planned to fetch the top 3 performers based on the default time period (60 min) + pass them down (post-api request) to Best Performers
  //When a user clicked on a new time period, the state would change & a new
  //request would be made via handleSelect (passed down to TimeframeSelector), prompting the page to rerender with the top 3 performers for that period.

  let [now, setNow] = useState(new Date().getTime());
  //default time period = past hour; 3600000 ms in an hour
  let [period, setPeriod] = useState(now - 3600000);

  const handleSelect = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    // setPeriod(event.target.value);
    //thunk for api request for top three performers in that timeframe
  };

  return (
    <div className="App">
      <TimeframeSelector />
      <div className="mainDisplay">
        <BestPerformers />
        <div className="graphSelector">
          <SelectedAssets />
          <GraphDisplay />
        </div>
      </div>
    </div>
  );
};

export default App;
