import React from 'react';
import { SortCategory } from '../sortCategory/SortCategory';
import { SortRating } from '../sortRating/SortRating';
import './sortBlock.scss';

export const SortBlock = () => {
  return (
    <section className="sortBlock">
      <SortCategory />
      <SortRating />
    </section>
  );
};
