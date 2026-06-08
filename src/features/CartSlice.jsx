import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const selectedPlant = action.payload;
      const existingPlant = state.cartItems.find(
        (cartItem) => cartItem.id === selectedPlant.id
      );

      if (!existingPlant) {
        state.cartItems.push({
          ...selectedPlant,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const selectedPlantId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== selectedPlantId
      );
    },
    updateQuantity: (state, action) => {
      const { plantId, quantityChange } = action.payload;
      const existingPlant = state.cartItems.find(
        (cartItem) => cartItem.id === plantId
      );

      if (!existingPlant) {
        return;
      }

      const updatedQuantity = existingPlant.quantity + quantityChange;

      if (updatedQuantity > 0) {
        existingPlant.quantity = updatedQuantity;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== plantId
        );
      }
    },
    addPlantToCart: (state, action) => {
      const selectedPlant = action.payload;
      const existingPlant = state.cartItems.find(
        (cartItem) => cartItem.id === selectedPlant.id
      );

      if (!existingPlant) {
        state.cartItems.push({
          ...selectedPlant,
          quantity: 1,
        });
      }
    },
    increasePlantQuantity: (state, action) => {
      const selectedPlantId = action.payload;
      const existingPlant = state.cartItems.find(
        (cartItem) => cartItem.id === selectedPlantId
      );

      if (existingPlant) {
        existingPlant.quantity += 1;
      }
    },
    decreasePlantQuantity: (state, action) => {
      const selectedPlantId = action.payload;
      const existingPlant = state.cartItems.find(
        (cartItem) => cartItem.id === selectedPlantId
      );

      if (existingPlant && existingPlant.quantity > 1) {
        existingPlant.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== selectedPlantId
        );
      }
    },
    deletePlantFromCart: (state, action) => {
      const selectedPlantId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== selectedPlantId
      );
    },
  },
});

export const {
  addItem,
  addPlantToCart,
  increasePlantQuantity,
  decreasePlantQuantity,
  removeItem,
  deletePlantFromCart,
  updateQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotalQuantity = (state) =>
  state.cart.cartItems.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
    0
  );

export const selectCartTotalCost = (state) =>
  state.cart.cartItems.reduce(
    (totalCost, cartItem) => totalCost + cartItem.price * cartItem.quantity,
    0
  );

export default cartSlice.reducer;
