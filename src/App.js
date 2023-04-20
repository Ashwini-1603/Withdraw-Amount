import React from 'react';
import './style.css';
import Banner from './components/Banner/Banner.js';
import Bill from './slice/Bill.js';
export default function App() {
  return (
    <div className="main-container">
      <Banner />
      <Bill />
    </div>
  );
}
