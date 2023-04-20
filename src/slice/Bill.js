import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { decrementby5, decrementby10 } from './slice';
import './bill.css';
export default function Bill() {
  const count1 = useSelector((state) => state.counter.value);
  const count = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  const [finalBill, setFinalBill] = useState('');

  function Handlebythousand() {
    if (count1 >= 10000) {
      dispatch(decrementby10());
    } else {
      setFinalBill(count);
    }
  }

  function HandlebyFivethousand() {
    if (count1 >= 5000) {
      dispatch(decrementby5());
    } else {
      setFinalBill(count);
    }
  }
  return (
    <>
      <div className="Bill-container">
        <div className="bill-amount">
          {finalBill}
          <h1>${count1}</h1>
          <p>Total Amount</p>
        </div>
        <div className="btn-container">
          <button onClick={Handlebythousand}>
            <span className="btn-color">WITHDRAW $10000</span>
          </button>
          <button className="btn-color" onClick={HandlebyFivethousand}>
            WITHDRAW $5000
          </button>
        </div>
      </div>
    </>
  );
}
