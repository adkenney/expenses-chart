import React from 'react';
import classes from './BalanceView.module.css';

const BalanceView = () => {
  return (
    <div className={classes['balance-container']}>
      <div>
        <h1>My balance</h1>
        <h2>$921.48</h2>
      </div>
    </div>
  );
};

export default BalanceView;
