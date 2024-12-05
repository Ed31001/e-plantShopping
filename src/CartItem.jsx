import React from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
const CartItem = ({ setShowCart }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {

    return cart.map((i)=>i.quantity * Number(i.cost.replace("$",""))).reduce((total, currVal)=> total + currVal, 0);

  };
  // Calculate total quantity of items in the cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Call setTotalQuantity to pass the total quantity to the parent
//   useEffect(() => {
//     const totalQuantity = calculateTotalQuantity();
//     setTotalQuantity(totalQuantity); // Send to parent
//   }, [cart, setTotalQuantity]); // Recalculate whenever the cart changes

  const handleContinueShopping = (e) => {

    setShowCart(false);
  };



  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {

    if (item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
      } else {
        dispatch(removeItem(item.name));
      }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return (item.quantity * Number(item.cost.replace("$", "")));
  };

  return (
const CartItem = ({ onContinueShopping }) => {
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};
export default CartItem;