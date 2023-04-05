import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
  return (
    <section className="logo">
      <Link to="/" className="logo__link">
        <img className="logo__image" src="image/image 1.png" alt="pizza" />
        <div className="logo__title-wrapper">
          <h1 className="logo__title">pizza</h1>
          <p className="logo__title-subtitle">the most delicious pizza in the universe</p>
        </div>
      </Link>
    </section>
  );
};
