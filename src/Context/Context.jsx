import React, { useReducer, createContext, useContext } from 'react';
import { cartReducer, initialValue } from './reducer';

const CartContext = createContext(initialValue);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  const value = {
    product: state.product,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within CartContext');
  }

  return context;
};

export default useCart;
