import React from 'react';
import { Link } from 'react-router-dom';
import './emptyBasket.scss';

export const EmptyBasket = () => {
  return (
    <section>
      <div className="emptyBasket__wrapper">
        <h2 className="emptyBasket__title">Empty basket </h2>
        <div className="emptyBasket__subTitle">
          You probably haven't ordered pizza yet.
          <br /> To order pizza, go to the main page.
        </div>
        <img className="emptyBasket__image" src="image/empty-basket.png" alt="empty basket" />
        <Link to="/" className="emptyBasket__button">
          Come back
        </Link>
      </div>
    </section>
  );
};
