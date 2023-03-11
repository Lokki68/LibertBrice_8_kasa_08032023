import React from 'react';
import Styles from './Rates.module.scss'
import Star from "../../Star/Star";

/**
 *
 * @param rates number
 * @returns {JSX.Element}
 * @constructor
 */

const Rates = ({rates}) => {
  console.log(rates)

  const displayStar = (rate) => {
    let maxStar = 5

    while(maxStar === 0) {
      maxStar -=1
      return <Star width={24} height={24} active={false} />
    }


  }

  return (
    <div className={Styles.ratesContainer} >
      {displayStar(0)}
    </div>
  );
};

export default Rates;
