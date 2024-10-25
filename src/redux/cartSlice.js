import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    favoriteItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime()
      state.cartItems.push({
        id: timeId,
        clothId: action.payload.cloth.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.cloth.price
      })
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId 
      );
    },
    toggleFavorite: (state, action) => {
      const isFavorite = state.favoriteItems.find(
          item => item.clothId === action.payload.clothId
      );

      if (isFavorite) {
          // Remove from favorites if already in the list
          state.favoriteItems = state.favoriteItems.filter(
              item => item.clothId !== action.payload.clothId
          );
      } else {
          // Add to favorites
          const itemToAdd = state.cartItems.find(
              item => item.clothId === action.payload.clothId
          );
          if (itemToAdd) {
              state.favoriteItems.push(itemToAdd);
          }
      }
  }
  }
});




export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total
  }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const getFavoriteItems = state => state.cart.favoriteItems;
export const { addItemToCart, removeItemFromCart, toggleFavorite } = cartSlice.actions;
export default cartSlice.reducer;
