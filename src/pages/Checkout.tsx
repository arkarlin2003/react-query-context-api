import { useContext } from "react";
import { CartStore } from "../store/CartProvider";
import StockSelect from "../components/StockSelect";

const Checkout = () => {
  const { state,addCart} = useContext(CartStore);
  return (
    <div className="flex justify-between">
      <div>
        <ul>
          {state.cartItems.map((cart) => (
            <li key={cart.product.id} className="flex gap-5">
              <div>
                <img src={cart.product.image} className="w-20 h-20" alt="" />
              </div>
              <div className="space-y-2">
                <h1 className="text-sm text-gray-600">{cart.product.title}</h1>
                <StockSelect count={cart.product.rating.count} qty={cart.qty} setQty={(value)=> addCart({product:cart.product,qty:value})}/>
                <h3>{cart.product.price * cart.qty}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
            <li>Items Price: {state.itemsPrice}</li>
            <li>Shipping Price: {state.shippingPrice}</li>
            <li>Total Price: {state.totalPrice}</li>
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
