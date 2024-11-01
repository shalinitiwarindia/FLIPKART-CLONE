import { useContext } from 'react';
import { CartContext } from './CartContext'; // Make sure the path is correct

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext); // Destructure from the context

  if (!cart) {
    return <div>Cart is empty</div>; // Handle case when cart is undefined
  }

  
   
