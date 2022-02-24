import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import useCart from '../../Context/Context';

const NavCart = () => {
  const { product } = useCart();
  return (
    <div className="cartWrapper">
      <nav className="navContentWrapper">
        <h1>
          <Link to="/">Home</Link>
        </h1>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/cart">Cart</Link>
          {/* {product.length === 0 ? (
            <h3 style={{ fontSize: '1.5rem', color: 'white' }}>🛒</h3>
          ) : ( */}
          <h3 className="prodLength">{product.length}</h3>
          {/* // )} */}
        </button>
      </nav>
    </div>
  );
};

export default NavCart;
