import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: [],
  filter: {
    sizes: [26],
    types: [0],
    price: '',
    category: 'All',
    rating: 'Popularity',
  },
  basketItem: [],
  sum: 0,
  amountSum: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getItems: (state, action) => {
      const findItems = state.basketItem.find((obj) => obj.id === action.payload.id);

      if (findItems) {
        if (action.payload.countAction === 'remove') {
          findItems.count--;
          if (findItems.count < 1) {
            state.basketItem = state.basketItem.filter((item) => item.count > 1);
          }
          state.sum -= action.payload.price;
          return;
        }
        findItems.count++;
        state.sum += action.payload.price;
      } else {
        state.basketItem = [...state.basketItem, action.payload];
      }
    },
    getEmptyBasket: (state, action) => {
      state.basketItem = [...action.payload];
    },
    getPizzas: (state, action) => {
      state.card = [...action.payload];
    },
    changeTypes: (state, action) => {
      state.filter = {
        ...state.filter,
        types: action.payload,
      };
    },
    changeCategory: (state, action) => {
      state.filter = {
        ...state.filter,
        category: action.payload,
      };
    },
    changeRating: (state, action) => {
      state.filter = {
        ...state.filter,
        rating: action.payload,
      };
    },
    getSize: (state, action) => {
      state.filter = {
        ...state.filter,
        sizes: action.payload,
      };
    },
    getSum: (state, action) => {
      state.sum = action.payload;
    },
    getAmountSum: (state, action) => {
      state.amountSum = action.payload;
    },
  },
});

export const {
  getEmptyBasket,
  getSum,
  getSize,
  getPizzas,
  changeTypes,
  changeCategory,
  changeRating,
  getItems,
  findItems,
  getAmountSum,
} = productsSlice.actions;
export default productsSlice.reducer;
