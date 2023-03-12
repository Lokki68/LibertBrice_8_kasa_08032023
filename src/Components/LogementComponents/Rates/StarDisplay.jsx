import React from 'react';
import Star from "../../Star/Star";


const StarDisplay = ({rate}) => {
  switch(rate) {
    case 0:
      return (
        <>
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
        </>
      )
    case 1:
      return (
        <>
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
        </>
      )
    case 2:
      return (
        <>
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
        </>
      )
    case 3:
      return (
        <>
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={false} />
          <Star width={24} height={24} active={false} />
        </>
      )
    case 4:
      return (
        <>
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={false} />
        </>
      )
    case 5:
      return (
        <>
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
          <Star width={24} height={24} active={true} />
        </>
      )
  }
};

export default StarDisplay;