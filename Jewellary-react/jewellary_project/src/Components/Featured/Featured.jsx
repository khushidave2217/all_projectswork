import React from 'react'
import './Featured.css'
import all_product from '../Assets/all_product'
import { Link } from 'react-router-dom';

const Featured = () => {
  const handleAddToCart = (name, price) => {
    const item = { name, price };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  };
  return (
    <div className='feature-container'>
      <h1>Featured Products</h1>
      <p>Add Featured products to weekly lineup</p>
      <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_1} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
    <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_2} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
      <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_3} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_4} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_5} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
      <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_6} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_7} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_8} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
    <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_9} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_10} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_11} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
      <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_12} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
    <div className="feature-main">

        <h6>New</h6>
        <img src={all_product.Product_13} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
    <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_14} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
   <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_15} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>
     <div className="feature-main">
        <h6>New</h6>
        <img src={all_product.Product_16} alt="" />
        <h3>Rings For Women</h3>
        <h5>$20.00</h5>
        <Link to="/cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart('Rings For Women', 20.00)}>
            Add to Cart
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Featured