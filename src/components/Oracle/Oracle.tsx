import React, {Fragment, useState, useEffect } from 'react';
import oracleLogo from './oracle.svg';
import './Oracle.css';
import { CoinOBJ } from '../../model/CoinOBJ';
import Coin from '../Coin/Coin';
import { Coins } from '../../mock/Coins';
import Skeleton from '../Skeleton/Skeleton';

function Oracle(){

  const [ coins, setCoins ] = useState<CoinOBJ[]>([]);
  const [ selectedId, setSelectedId ] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        setCoins(Coins);
      }, 3000)
    }
    fetchData();
  }, []);
  
    
  return (
    <Fragment>
      <div className='Oracle-container'>
        <div className='Oracle-logo-wrapper'>
          <img src={oracleLogo} className='Oracle-logo' alt='oracle-logo' />
        </div>

        {coins && coins.length > 0 ? (
          coins.map((item) => {
            return <Coin key={item.id} coin={item} selectedId={selectedId} updateSelectedId={(id: number) => setSelectedId(id) }/>
          })
        ) : (
          <Skeleton/>
        )}
      </div>
    </Fragment>
  )
};

export default Oracle;
