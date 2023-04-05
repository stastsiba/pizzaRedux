import React from 'react';
import { useDispatch } from 'react-redux';
import { getEmptyBasket } from '../redux/reducers/products';
import { getSum } from '../redux/reducers/products';
import './basketHeader.scss';

export const BasketHeader = () => {
  const dispatch = useDispatch();
  const resItems = () => {
    dispatch(getEmptyBasket([]));
    dispatch(getSum(0));
  };

  return (
    <section>
      <div className="basketHeader__title">
        <div className="basketHeader__ttile-left-container">
          <div className="basketHeader__ttile-left-image-block">
            <img
              className="basketHeader__title-image"
              src="image/basket-icon.png"
              alt="basket-icon"
            />
            <div className="basketHeader__title-image-bottom-block">
              <img src="image/basket-round.png" alt="round" />
              <img src="image/basket-round.png" alt="round" />
            </div>
          </div>
          <div className="basketHeader__title-text">Basket</div>
        </div>
        <div onClick={resItems} className="basket__title-right-container">
          <img className="basket__title-right-image" src="image/delete.png" alt="delete" />
          <div className="basket__title-right-delet-text">Empty trash</div>
        </div>
      </div>
    </section>
  );
};
