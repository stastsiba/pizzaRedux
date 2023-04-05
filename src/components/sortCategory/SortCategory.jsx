import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../redux/reducers/products';
import './sortCategory.scss';

export const SortCategory = () => {
  const categoryList = ['All', 'Meat', 'Vegetarian', 'Grill', 'Acute', 'Closeds'];
  const [categoryId, setCategory] = useState(0);
  const dispatchCategory = useDispatch();
  return (
    <section className="sortCategory">
      {categoryList.map((item, idx) => (
        <div
          key={idx}
          onClick={() => (setCategory(idx), dispatchCategory(changeCategory(item)))}
          className={categoryId === idx ? 'active' : 'sortCategoryItem'}>
          {item}
        </div>
      ))}
    </section>
  );
};
