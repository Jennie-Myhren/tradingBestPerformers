import React from 'react';
import { calcPeriodChange, formatCurrency } from './utilityfunc';
import './App.css';

const BestPerformers: React.FC = props => {
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
    {
      securityId: 'BCAP',
      period: {
        o: 1.4,
        c: 1.5,
      },
      //Stats for each discrete unit within the total period (ex: for each day)
      stats: [
        {
          o: 1.4,
          c: 1.5,
        },
      ],
    },
    {
      securityId: 'SPICE',
      period: {
        o: 1.07,
        c: 1.08,
      },
      //Stats for each discrete unit within the total period (ex: for each day)
      stats: [
        {
          o: 1.07,
          c: 1.08,
        },
      ],
    },
  ];

  return (
    <div className="App" id="leftDisplay">
      <h2>BEST PERFORMERS</h2>
      <table>
        <tr className="table-header">
          <th>Asset</th>
          <th>Open Price</th>
          <th>Close Price</th>
          <th>Period Change</th>
        </tr>
        {sampleStats.map(security => {
          let { securityId } = security;
          let open = security.period.o;
          let close = security.period.c;
          let periodChange = calcPeriodChange(open, close);

          return (
            <tr className="table-stats" key={securityId}>
              <td>{securityId}</td>
              <td>{formatCurrency(open)}</td>
              <td>{formatCurrency(close)}</td>
              <td className={periodChange > 0 ? 'green' : 'red'}>
                {periodChange > 0 ? '+' : ''} {periodChange}%
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BestPerformers;
