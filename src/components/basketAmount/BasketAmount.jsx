import React from 'react';
import { useSelector } from 'react-redux';
import './basketAmount.scss';

export const BasketAmount = () => {
  const { basketItem, amountSum } = useSelector((state) => state.products);
  const count = basketItem.map((item) => item.count);
  return (
    <section>
      <div className="basketCard__total-container">
        <div className="basketCard__total-left-block">
          <div className="basketCard__total-left-pizza">Total pizzas: </div>
          <div className="basketCard__total-left-pizza-amount">
            {count.reduce((i, elem) => (i += elem), 0)} pcs.
          </div>
        </div>
        <div className="basketCard__total-right-block">
          <div className="basketCard__total-right-sum-text">Order amount:</div>
          <div className="basketCard__total-right-sum">{amountSum} ₴</div>
        </div>
      </div>
    </section>
  );
};
