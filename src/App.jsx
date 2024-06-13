import { useState } from 'react'
import './App.css'
import StakeBar1 from './Components/StakeBar1'
import Barchart from './Components/Barchart'
import Sidebar from './Components/Sidebar'
import Linechart from './Components/Linechart'
import StakeBar from './Components/StakeBar'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import Box from './Components/Box'

function App() {
  const percentage = 75;
  const data = [
    { title: 'Pharetra', value: '1,253', change: 23 },
    { title: 'Pulvinar', value: '68 (4)', change: 38 },
    { title: 'Sapien', value: '157', change: -6 },
  ];
  return (
    <>
    <div className='content'>
     <Sidebar className="sidebar"></Sidebar>
     <section style={{margin:"30px 40px"}}>
     <Linechart ></Linechart>
      <div className='Chart'>
      <Barchart width="100%"></Barchart>
      <CircularProgressbar style={{width:"10px"}} value={percentage} className='progressChart' text={`${percentage}%`} />
     </div>
     <div style={{display:"flex",margin:"0px 20px",gap:"30px"}}>
      <StakeBar></StakeBar>
      <StakeBar1></StakeBar1>
     </div>
     <div className="container">
      {data.map((item, index) => (
        <Box key={index} {...item} />
      ))}
    </div>
     </section>
     </div>
     </>
  )
}

export default App
