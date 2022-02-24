import React from 'react';
import './product.css';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';
import useCart from '../../Context/Context';

const Product = () => {
  const { product, dispatch } = useCart();
  const items = [
    {
      id: 1,
      name: 'Buffalo - Striploin',
      price: 39.11,
      photo: img1,
    },
    {
      id: 2,
      name: 'Bacardi Breezer - Tropical',
      price: 257.92,
      photo: img2,
    },
    {
      id: 3,
      name: 'Wine - Gato Negro Cabernet',
      price: 51.01,
      photo: img3,
    },
    {
      id: 4,
      name: 'Cabbage - Nappa',
      price: 250.9,
      photo: img4,
    },
    {
      id: 5,
      name: 'Sping Loaded Cup Dispenser',
      price: 175.85,
      photo: img5,
    },
    {
      id: 6,
      name: 'Bread - Malt',
      price: 82.61,
      photo: img6,
    },
    {
      id: 7,
      name: 'Glass Clear 8 Oz',
      price: 201.1,
      photo: img7,
    },
    {
      id: 8,
      name: 'Sour Puss Raspberry',
      price: 134.99,
      photo: img8,
    },
    {
      id: 9,
      name: 'Pork - Chop, Frenched',
      price: 199.16,
      photo: img9,
    },

    {
      id: 10,
      name: 'Bagels Poppyseed',
      price: 350,
      photo: img2,
    },
    {
      id: 11,
      name: 'Wine - Gato Negro Cabernet',
      price: 261,
      photo: img3,
    },
  ];

  // const [isInCart, setIsInCart] = useState(false);
  // useEffect(() => {
  //   const productIsInCart = product.find((prod) => prod.name === name);

  //   if (productIsInCart) {
  //     setIsInCart(true);
  //   } else {
  //     setIsInCart(false);
  //   }
  // }, [products, name]);

  return (
    <div className="productPageWrapper">
      <div className="productCardWrapper">
        {items.map((el) => (
          <div className="productCard">
            <h2 className="productCardName">{el.name}</h2>
            <img className="productCardPhoto" src={el.photo} />
            <div className="productCardPrice">{el.price}</div>
            {product.some((p) => p.id === el.id) ? (
              <button
                className="removeButton"
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_ITEM',
                    payload: el,
                  })
                }
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="addButton"
                onClick={() =>
                  dispatch({
                    type: 'ADD_ITEM',
                    payload: el,
                  })
                }
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
