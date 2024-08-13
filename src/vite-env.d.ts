/// <reference types="vite/client" />

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type payloadType = {
  product: Product;
  qty: number;
};

type CartProps = {
  cartItems: payloadType[];
  itemsPrice: number;
  shippingPrice: number;
  totalPrice: number;
};
