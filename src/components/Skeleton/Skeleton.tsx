import React from 'react';
import './Skeleton.css';
import layout from '../Coin/layout.svg';

const Skeleton: React.FC = () => {
  return (
    <div className='Coin-wrapper'>
       <img src={layout} alt="layout"/>
      <div className='Skeleton'>
        <div className='Top'>
          <p></p>
        </div>
        <div className='Bottom'>
          <div className='Image'>
            <img alt="skeleton"/>
          </div>
          <div className='Desc'>
            <p className='Curreny'></p>
            <p className='Date'></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skeleton;
