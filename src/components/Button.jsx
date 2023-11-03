import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';

export default function Button(props) {
  const { type, items, updateItemQty } = useContext(CartContext);
  // console.log(type);
  return (
    <button className={`button-${type}-${props.id ? 'id' : ''}`}>
      {props.children}
    </button>
  );
}
