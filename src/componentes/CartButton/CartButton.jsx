import React, { useContext } from 'react';
import { BsCart3 } from 'react-icons/bs';

import './CartButton.css';
import AppContext from '../../context/AppContext';

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >

      <BsCart3 />

      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
};
export default CartButton;