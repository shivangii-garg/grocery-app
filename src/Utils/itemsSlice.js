import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: 1,
        name: "sugar",
        price: 20
      },
      {
        id: 2,
        name: "salt",
        price: 15
      },
      {
        id: 3,
        name: "oil",
        price: 50
      }
    ],
    basketItems: []
  },
  reducers: {
    addItem: (state, action) => {
      state.basketItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.basketItems.findIndex(
        (x) => x.key === action.payload.key
      );
      console.log("index: ", index);
      state.basketItems.splice(index, 1);
    }
  }
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
