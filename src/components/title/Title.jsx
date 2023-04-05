import React from 'react';
import { useSelector } from 'react-redux';
import './title.scss';

export const Title = () => {
  const { filter } = useSelector((state) => state.products);

  return <div className="title">{filter.category} pizzas</div>;
};
