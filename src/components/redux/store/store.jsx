import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../reducers/products';

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
