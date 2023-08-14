import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  products: [],
  totalAmount: 0,
  totalProducts: 0,
};

const cartSLice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    replaceCart(state, action) {
      state.totalProducts = action.payload.totalProducts;
      state.products = action.payload.products;
    },
    addItem(state, action) {
      const { item } = action.payload;
      const existingItem = state.products.find((el) => el.id === item.id);
      state.totalProducts++;
      if (!existingItem) {
        state.products.push({
          name: item.name,
          price: item.price,
          quantity: 1,
          id: item.id,
          totalPrice: item.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
    removeItem(state, action) {
      const { item } = action.payload;
      const existingItem = state.products.find((el) => el.id === item.id);
      state.totalProducts--;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - item.price;
        state.totalAmount = state.totalAmount - item.price;
      } else {
        state.totalAmount = state.totalAmount - item.price;
        state.products = state.products.filter((el) => el.id !== item.id);
      }
    },
  },
});

export const cartActions = cartSLice.actions;
export default cartSLice.reducer;
