import React from 'react';
import './Banner.css';
import { useSelector, useDispatch } from 'react-redux';
export default function Banner() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="Banner-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU"
        alt="error"
        className="image-size"
      />
      <h1 className="text-align">adam joy</h1>
    </div>
  );
}
