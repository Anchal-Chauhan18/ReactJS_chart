import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'jun', Lorem: 121 },
  { name: 'jul', Lorem: 168 },
  { name: 'aug', Lorem: 145 },
  { name: 'sep', Lorem: 187 },
  { name: 'oct', Lorem: 202 },
];

const Barchart = () => {
  return (
    
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
      <XAxis dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Lorem" fill="#2e2e43" label={{ position: 'top' }} />
    </BarChart>
  );
};

export default Barchart;