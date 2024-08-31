import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex">
        <h1 className="p-4 font-bold text-3xl">
          Cart Items - {cartItems.length}
        </h1>
        <button
          className="p-2 m-5
      bg-green-200"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
