import React, { createContext } from "react";
import useCartContext from "../hooks/useCartContext";

type Props = {
  children: React.ReactNode;
};

type CartProviderType = ReturnType<typeof useCartContext>;

const initalState: CartProps = {
  cartItems: [],
  itemsPrice:0.00,
  shippingPrice:0.00,
  totalPrice:0.00,
};

const initContextState: CartProviderType = {
  state: initalState,
  addCart: () => {},
};
export const CartStore = createContext<CartProviderType>(initContextState);

const CartProvider: React.FC<Props> = ({ children }) => {
  return <CartStore.Provider value={useCartContext()}>{children}</CartStore.Provider>;
};

export default CartProvider;
