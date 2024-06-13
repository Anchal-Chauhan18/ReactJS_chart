import React from 'react';
import styles from '../Components/StakeBar.module.css'

const StackedBarChart = () => {
  
 return (<> <div className={styles.card} style={{background:"#fff",color:"#2e2e43"}}>
  <h2 className={styles.cardtitle}>Lacina</h2>
  <ul className={styles.cardlist}>
    <li className={styles.carditem}>
      <span className={styles.cardlabel}>Fusce</span>
      <div className={styles.cardprogress} style={{ width: '70%',backgroundColor:"#2e2e43" }} />
      <div className={styles.cardprogressfill} style={{ width: '30%' ,backgroundColor:"#fff"}} />
    </li>
    <li className={styles.carditem}>
      <span className={styles.cardlabel}>Effictur</span>
      <div className={styles.cardprogress} style={{ width: '80%',backgroundColor:"#2e2e43"  }} />
      <div className={styles.cardprogressfill} style={{ width: '20%',backgroundColor:"#fff" }} />
    </li>
    <li className={styles.carditem}>
      <span className={styles.cardlabel}>turpis</span>
      <div className={styles.cardprogress} style={{ width: '80%',backgroundColor:"#2e2e43"  }} />
      <div className={styles.cardprogressfill} style={{ width: '20%',backgroundColor:"#fff" }} />
    </li>
    <li className={styles.carditem}>
      <span className={styles.cardlabel}>vitael</span>
      <div className={styles.cardprogress} style={{ width: '80%' ,backgroundColor:"#2e2e43" }} />
      <div className={styles.cardprogressfill} style={{ width: '20%' ,backgroundColor:"#fff" }} />
    </li>
  </ul>
</div>
</>
);
};

export default StackedBarChart;