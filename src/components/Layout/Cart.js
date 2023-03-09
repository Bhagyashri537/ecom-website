import { useState } from "react";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const CartitemList = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  
];

const Cart = () => {
  
  const cartItem = CartitemList.map((item) => (
    <li>
      <h1>{item.title}</h1>
      <h2>{item.price}</h2>
      <img src={item.imageUrl} alt="img" />
    </li>
  ));
  return (
    <>
      <button onClick={() => setShowCart(true)}> showtheCart - {numberOfCartItems}</button>

      {showCart ? (
        <div>
          {cartItem}
          <button onClick={() => setShowCart(false)}>close</button>
          <div className="fixed"></div>
        </div>
      ) : null}
    </>
  );
};
export default Cart;
