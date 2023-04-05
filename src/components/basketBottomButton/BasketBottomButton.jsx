import React from 'react';
import { Link } from 'react-router-dom';
import './basketBottomButton.scss';

export const BasketBottomButton = () => {
  return (
    <section className="basketBottomButton__wrapper">
      <Link to="/" className="basketBottomButton__back">
        <img src="image/_Path_.svg" alt="arrow" />
        Come back
      </Link>
      <button className="basketBottomButton__pay">Pay now</button>
    </section>
  );
};
