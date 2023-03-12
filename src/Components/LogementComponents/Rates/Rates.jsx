import React from 'react';
import Styles from './Rates.module.scss'
import StarDisplay from "./StarDisplay";



const Rates = ({rates}) => {
  console.log(rates)



  return (
    <div className={Styles.ratesContainer} >
      <StarDisplay rate={rates} />
    </div>
  );
};

export default Rates;
