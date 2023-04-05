import React from 'react';
import { BasketAmount } from '../basketAmount/BasketAmount';
import { BasketBottomButton } from '../basketBottomButton/BasketBottomButton';
import { BasketCard } from '../basketCard/BasketCard';
import { BasketHeader } from '../basketHeader/BasketHeader';
import { EmptyBasket } from '../emptyBasket/EmptyBasket';
import { useSelector } from 'react-redux';
import './basket.scss';

export const Basket = () => {
  const { basketItem } = useSelector((state) => state.products);
  return (
    <div className="basket">
      {!basketItem.length ? (
        <EmptyBasket />
      ) : (
        <>
          <BasketHeader />
          <BasketCard />
          <BasketAmount />
          <BasketBottomButton />
        </>
      )}
    </div>
  );
};
