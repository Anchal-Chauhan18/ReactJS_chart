import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

const data = [
  { name: 'Q1', uv: 432 },
  { name: 'Q2', uv: 321 },
  { name: 'Q3', uv: 626 },
  { name: 'Q4', uv: 503 },
];

const LineChartComponent = () => {
  return (
    <LineChart width={800} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name" tick={{ fontSize: 14 }} />
      <CartesianGrid stroke="transparent" />
      <Tooltip />
      <Legend />
      <Line type="linear" dataKey="uv" stroke="#2e2e43" activeDot={{ r: 8 }}>
        <LabelList dataKey="uv" position="top" />
      </Line>
    </LineChart>
  );
};

export default LineChartComponent;