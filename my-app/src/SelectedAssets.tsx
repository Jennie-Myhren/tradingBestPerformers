import React from 'react';
import './App.css';

const SelectedAssets: React.FC = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const [isSelected, setIsSelected] = useState('');

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  // const handleSelect = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setIsSelected(event.target.value);
  //   //thunk for api request for top three performers in that timeframe
  // };

  //sample stats for table of best performers in the given period;
  let sampleStats = [
    {
      securityId: 'OFNT',
      //stats for period as a whole
      period: {
        s: 1549968342000,
        e: 1549968542000,
        o: 1.5,
        h: 1.66,
        l: 1.46,
        c: 1.54,
        v: 20332,
      },
      //Stats for each discrete unit within the total period (ex: for each day)
      stats: [
        {
          s: 1549968342000,
          e: 1549968542000,
          //open price for the period
          o: 1.5,
          h: 1.66,
          l: 1.46,
          //close price for the period
          c: 1.54,
          v: 20332,
        },
      ],
    },
  ];

  return (
    <div className="App custom-select">
      <select
        className="dropdown"
        value="Selected Asset"
        // onClick={handleClick}
        // onChange={handleSelect}
      >
        {sampleStats.map(security => {
          let { securityId } = security;

          return (
            <div className="options">
              <option value={securityId}>
                {securityId} <br /> Company * Asset Type
              </option>
            </div>
          );
        })}
      </select>
      <div className="stats">
        <h2>Last Trade Price</h2>
        <br />
        {/* {selected} */}
      </div>
    </div>
  );
};

export default SelectedAssets;
