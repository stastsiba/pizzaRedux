import React from 'react';
import { Link } from 'react-router-dom';
import './basketBottomButton.scss';
import { useSelector } from 'react-redux';

export const BasketBottomButton = () => {
  const { basketItem } = useSelector((state) => state.products);

  const clickPay = () => {
    
  };
  return (
    <section className="basketBottomButton__wrapper">
      <Link to="/" className="basketBottomButton__back">
        <img src="image/_Path_.svg" alt="arrow" />
        Come back
      </Link>
      <button onClick={clickPay} className="basketBottomButton__pay">
        Pay now
      </button>
    </section>
  );
};
