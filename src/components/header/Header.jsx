import React from 'react';
import { BasketButton } from '../basketButton/BasketButton';
import { Logo } from '../logo/Logo';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <BasketButton />
    </div>
  );
};
