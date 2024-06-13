import React from 'react';
import styles from '../Components/StakeBar.module.css'
const StackedBarChart = () => {
  return (
  <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.cardtitle}>Elementum</h2>
        <ul className={styles.cardlist}>
          <li className={styles.carditem}>
            <span className={styles.cardlabel}>Torquent</span>
            <div className={styles.cardprogress} style={{ width: '30%', }} />
          </li>
          <li className={styles.carditem}>
            <span className={styles.cardlabel}>Conubia</span>
            <div className={styles.cardprogress} style={{ width: '50%' }} />
          </li>
          <li className={styles.carditem}>
            <span className={styles.cardlabel}>Nostra</span>
            <div className={styles.cardprogress} style={{ width: '40%' }} />
          </li>
          <li className={styles.carditem}>
            <span className={styles.cardlabel}>Mauris</span>
            <div className={styles.cardprogress} style={{ width: '70%' }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StackedBarChart;