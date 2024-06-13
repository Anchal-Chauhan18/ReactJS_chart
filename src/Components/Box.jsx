import React from 'react'
import styles from "../Components/Box.module.css"
const Box = ({ title, value, change }) => {
  return (
    <div className={styles.datacard}>
    <div className={styles.title}>{title}</div>
    <div className={styles.value}>{value}</div>
    <div className={styles.change}>
      {change > 0 ? (
        <span className={styles.positive}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 10l-5.5-5.5L5.5 1l5.5 5.5L6 10z" />
          </svg>
          {change}%
        </span>
      ) : change < 0 ? (
        <span className={styles.negative}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 2l5.5 5.5L6.5 11l-5.5-5.5L6 2z" />
          </svg>
          {change}%
        </span>
      ) : (
        <span>{change}%</span>
      )}
    </div>
  </div>
);
}

export default Box