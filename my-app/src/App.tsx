import React from 'react';
import './App.css';
import TimeframeSelector from './TimeframeSelector';
import BestPerformers from './BestPerformers';
import SelectedAssets from './SelectedAssets';
import GraphDisplay from './GraphDisplay';

const App: React.FC = () => {
  return (
    <div className="App">
      <TimeframeSelector />
      <BestPerformers />
      <SelectedAssets />
      <GraphDisplay />
    </div>
  );
};

export default App;
