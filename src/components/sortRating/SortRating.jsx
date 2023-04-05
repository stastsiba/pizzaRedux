import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRating } from '../redux/reducers/products';
import './sortRating.scss';

export const SortRating = () => {
  const { filter } = useSelector((state) => state.products);
  const [onRating, setOnRating] = useState(false);
  const listName = ['Popularity', 'Price', 'Alphabet'];
  const dispatchRating = useDispatch();

  return (
    <section className="sortRating">
      <div
        className="sortRating__block"
        onClick={() => {
          setOnRating(!onRating);
        }}>
        {!onRating ? (
          <img className="sortRating__image" src="image/arrow-sort.svg" alt="arrow" />
        ) : (
          <img className="sortRating__image-active" src="image/arrow-sort.svg" alt="arrow" />
        )}
        <div className="sortRating__list-container">
          <div className="sortRating__list-sort">Sort by:</div>
          {onRating && (
            <ul className="sortRating__list">
              {listName.map((elem, idx) => (
                <li key={idx} onClick={() => dispatchRating(changeRating(elem))} className="active">
                  {elem}
                </li>
              ))}
            </ul>
          )}
          <div className="sortRating_list-active">{filter.rating}</div>
        </div>
      </div>
    </section>
  );
};
