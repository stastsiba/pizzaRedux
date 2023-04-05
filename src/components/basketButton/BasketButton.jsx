import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAmountSum } from '../redux/reducers/products';
import './basketButton.scss';

export const BasketButton = () => {
  const { basketItem } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const count = basketItem.map((item) => item.count);
  const newPrice = basketItem.map((elem) => elem.price * elem.count);
  const price = newPrice.reduce((acc, i) => (acc += i), 0);
  dispatch(getAmountSum(price));

  return (
    <section className="basketButton">
      <Link to="/basket" className="basketButton__wrapper">
        <div className="basketButton__price">{price} $</div>
        <div className="basketButton__line"></div>
        <div className="basketButton__sum-container">
          <img src="image/basket-icon.svg" alt="Basket" />
          <span className="basketButton__sum-counter">
            {count.reduce((i, elem) => (i += elem), 0)}
          </span>
        </div>
      </Link>
    </section>
  );
};
