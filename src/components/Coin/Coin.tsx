import React, {useRef, useState, useEffect} from 'react';
import useHover from "@react-hook/hover";
import './Coin.css';
import { CoinOBJ } from '../../model/CoinOBJ';

import layout from './layout.svg';
import layoutBorder from './layout-border.svg';
import icon from './coin-icon.svg';
import active from './active.svg';
import terminated from './terminated.svg';
import suspended from './suspended.svg';


interface childProps {
  coin: CoinOBJ;
  updateSelectedId: (id: number) => void;
  selectedId: number;
}

const Coin: React.FC<childProps> = (props) => {
  const hoverTarget = useRef(null);
  const hovered = useHover(hoverTarget);
  const [ id, setId ] = useState(0);
  const [ price, setPrice ] = useState('');
  const [ coinLogo, setCoinLogo ] = useState('');
  const [ expiryDate, setExpiryDate ] = useState('');

  useEffect(() => {
    async function getCoinPirce(subscriptionId: number) {
      await fetchPirce(subscriptionId);
    }
    async function getCoinLogo(subscriptionId: number) {
      await fetchLogo(subscriptionId);
    }
    getCoinPirce(coin.subscriptionId);
    getCoinLogo(coin.subscriptionId);
    calcExpiryDate(coin.createdTimestamp, coin.leaseEnd, coin.blockNumber);
  }, []);

  const { coin, updateSelectedId, selectedId} = props;
  const select = () => {
    if (id === coin.id) {
      setId(0);
      updateSelectedId(0);
    } else {
      setId(coin.id);
      updateSelectedId(coin.id)
    }
  }

  const fetchPirce = (subscriptionId: number) => {
    setPrice('3,412,025.12');
  }
  const fetchLogo = (subscriptionId: number) => {
    setCoinLogo(icon);
  }
  const calcExpiryDate = (createdTimestamp: string, leaseEnd: number, blockNumber: number) => {
    const offset = 3 * (leaseEnd - blockNumber);
    const newDate = new Date((new Date(createdTimestamp)).getTime() + offset * 1000);
    const dateString = newDate.toDateString();
    const arr = dateString.split(' ');
    const hour = newDate.getHours();
    const min = newDate.getMinutes()
    let str = `${arr[2]}/${arr[1]}/${arr[3]} ${hour}:${min}`;
    setExpiryDate(str);
  }

  return (
    <div className="Coin-wrapper">
      <img src={selectedId === coin.id || hovered ? layoutBorder : layout } alt="layout"/>
      <div className="Coin-container" onClick={select} ref={hoverTarget}>
        <div className="Top">
          <div className="Left">{coin.symbol}</div>
          <img src={coin.status === 1 ? active : coin.status === 0 ? terminated : suspended} alt="coinstatus"/>
        </div>
        <div className="Bottom">
          <div className="image">
            <img src={coinLogo} alt="coinicon"/>
          </div>
          <div className="Desc">
            <p className="Curreny">$ {price}</p>
            <p className="Date">End: {expiryDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin;