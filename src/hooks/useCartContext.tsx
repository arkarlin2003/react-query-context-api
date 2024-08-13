import { useReducer } from "react";


const enum REDUCER_ACTION_TYPE {
  ADD_CART,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: payloadType;
};

const initalState: CartProps = localStorage.getItem('carts') ? JSON.parse(localStorage?.getItem('carts')) : {
    cartItems: [],
    itemsPrice:0.00,
    shippingPrice:0.00,
    totalPrice:0.00,
  };

const decimalPrice = (price) => {
    return price.toFixed(2)
}
const updateCart = (state:CartProps) => {
    const itemsPrice = decimalPrice(state.cartItems.reduce((pre,cur)=> pre+ (cur.product.price * cur.qty),0))
    const shippingPrice = decimalPrice(itemsPrice > 100 ? 10 : 0)
    const totalPrice = decimalPrice(Number(itemsPrice)+Number(shippingPrice))
    const setState = {...state,itemsPrice,shippingPrice,totalPrice}
    localStorage.setItem('carts',JSON.stringify(setState))
    return setState;
}

const reducer = (state: CartProps, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_CART:
        const existItem = state.cartItems?.find(cart=>cart?.product.id == action.payload?.product.id)
        if(existItem){
            const filterItems:payloadType[] = state.cartItems.filter(cart=>cart?.product.id != action.payload?.product.id)
            return updateCart({...state, cartItems: [...filterItems, action.payload] });
        }else{
            return updateCart({...state, cartItems: [...state.cartItems, action.payload] });
        }
    default:
      throw new Error();
  }
};

const useCartContext = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const addCart = (payload: payloadType) => {
      dispatch({ type: REDUCER_ACTION_TYPE.ADD_CART, payload });
  }

  return { state, addCart };
};

export default useCartContext;
