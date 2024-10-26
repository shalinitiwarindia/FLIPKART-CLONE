import { useContext } from 'react';
import { CartContext } from './CartContext'; // Make sure the path is correct

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext); // Destructure from the context

  if (!cart) {
    return <div>Cart is empty</div>; // Handle case when cart is undefined
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
