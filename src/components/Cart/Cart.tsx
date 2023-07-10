//Cart.tsx
import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import './Cart.scss';
import { Button, Space } from 'antd';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ShoeInCart } from '../../interfaces/shoe';

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  const user = useSelector<RootState, string | null>(
    (state) => state.users.user
  );

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <h1>Cart ({totalUniqueItems})</h1>

        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img
                className="cart__image"
                src={`data:${item.image.contentType};base64,${item.image.data}`}
                width="300px"
                alt={item.title}
              />
              {item.quantity} x {item.title} &mdash;
              <button
                onClick={() =>
                  updateItemQuantity(
                    item.id,
                    item.quantity ? item.quantity - 1 : 0
                  )
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  updateItemQuantity(
                    item.id,
                    item.quantity ? item.quantity + 1 : 0
                  )
                }
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        <p>Всего к оплате: {cartTotal}</p>
        <Space wrap>
          <Button type="primary">Перейти к оплате</Button>{' '}
          <Button type="primary" danger onClick={() => emptyCart()}>
            Очистить корзину
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Cart;
