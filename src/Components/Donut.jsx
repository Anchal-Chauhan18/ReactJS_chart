import React from 'react'
import { PieChart, Pie, Legend } from 'recharts';
const data = [
    { name: 'Lorem', value: 121 },
    { name: 'Ipsum', value: 75 },
  ];
const Donut = () => {
    const progress = 75; // Your percentage value

    return (
      <div className="container">
        <div className="title">Ipsum</div>
        <div className="progress-circle">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <div className="progress-value">{progress}%</div>
        </div>
        <div className="subtitle">Commodo lectus</div>
        <div className="controls">
          <div className="control" />
          <div className="control" />
        </div>
      </div>
  )
}

export default Donut
