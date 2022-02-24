import React, { useState, useEffect } from 'react';
import NavCart from '../../components/Cart/Cart';
import useCart from '../../Context/Context';
import './cartpage.css';

const CartPage = () => {
  const { product, dispatch } = useCart();
  const [total, setTotal] = useState();

  useEffect(() => {
    const newTotal = product
      .reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      .toFixed(2);

    setTotal(newTotal);
  }, [product]);
  return (
    <>
      <NavCart />
      <div className="cartPageWrapper">
        <p className="total">Your cart total is {total}</p>
        <div className="cartContainer">
          {product.map((prod, index) => (
            <div
              className="eachCartWrapper"
              style={{
                background: `url(${prod.photo}) center / cover no-repeat`,
              }}
            >
              <button
                className="removeBtn"
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_ITEM',
                    payload: prod,
                  })
                }
              >
                <p>-</p>
              </button>
              <div className="textContainer">
                <p className="subtitle">{prod.price}</p>
                <div className="quantityWrapper">
                  <button
                    style={{
                      visibility: prod.qty === 1 ? 'hidden' : 'visible',
                    }}
                    className="decreaseBtn"
                    onClick={() =>
                      dispatch({
                        type: 'DECREASE_PRODUCT_QTY',
                        payload: prod,
                      })
                    }
                  >
                    <p>⇓</p>
                  </button>

                  <p className="quantityDisplay">{prod.qty}</p>
                  <button
                    className="increaseBtn"
                    onClick={() =>
                      dispatch({
                        type: 'INCREASE_PRODUCT_QTY',
                        payload: prod,
                      })
                    }
                  >
                    <p>⇑</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;
