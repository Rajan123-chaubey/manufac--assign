// GammaStats.tsx

import React from 'react';
import { Table } from '@mantine/core';

interface Props {
  class1Stats: { mean: number; median: number; mode: number };
  class2Stats: { mean: number; median: number; mode: number };
  class3Stats: { mean: number; median: number; mode: number };
}

const GammaStats: React.FC<Props> = ({ class1Stats, class2Stats, class3Stats }) => {
  return (
    <div>
      <h1>Gamma Stats</h1>
      <Table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            <td>{class1Stats.mean.toFixed(3)}</td>
            <td>{class2Stats.mean.toFixed(3)}</td>
            <td>{class3Stats.mean.toFixed(3)}</td>
          </tr>
          <tr>
            <td>Median</td>
            <td>{class1Stats.median.toFixed(3)}</td>
            <td>{class2Stats.median.toFixed(3)}</td>
            <td>{class3Stats.median.toFixed(3)}</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>{class1Stats.mode.toFixed(3)}</td>
            <td>{class2Stats.mode.toFixed(3)}</td>
            <td>{class3Stats.mode.toFixed(3)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default GammaStats;
