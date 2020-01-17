import React from 'react';
import './App.css';
import TimeframeSelector from './TimeframeSelector';
import BestPerformers from './BestPerformers';
import SelectedAssets from './SelectedAssets';
import GraphDisplay from './GraphDisplay';

const App: React.FC = () => {
  //state -- time period; default = 60 minutes
  //state -- map topthree

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
