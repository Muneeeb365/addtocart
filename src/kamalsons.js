import React, { useState } from 'react';
import './kamalsons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faTrash } from '@fortawesome/free-solid-svg-icons';
import martImage from './images/images-removebg-preview (1).png';

const Mart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleItemClick = (productName, price, image) => {
    const newItem = { name: productName, price: price, image: image };
    setSelectedItems(prevItems => [...prevItems, newItem]);
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedItems.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <>
      <div></div>
      <div className="first">
        <img src={martImage} alt="" width="150" />
      </div>

      <div className="second">
        <h1>KAMAL SON'S STORE</h1>
      </div>

      <div className="three">
        <button className="class-button" onClick={handleShowCart}>
          <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
          {selectedItems.length > 0 && <span className="notification">{selectedItems.length}</span>}
        </button>
      </div>

      <div className="four">
        <ul className="menu-list">
          <li><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="/sale" style={{ textDecoration: 'none', color: 'inherit' }}>Sale</a></li>
          <li><a href="/categories" style={{ textDecoration: 'none', color: 'inherit' }}>Categories</a></li>
          <li><a href="/customer-care" style={{ textDecoration: 'none', color: 'inherit' }}>Customer Care</a></li>
        </ul>
      </div>

      <div className="five">
        <div className="image-container">
          <img src="https://www.80scasualclassics.co.uk/images/adidas-adilette-sliders-white-black-p10986-66692_image.jpg" alt="" width="180" />
          <div className="details">
            <p>Adidas Slides</p>
            <p>PKR 6000</p>
            <button className="add-to-cart-button" onClick={() => handleItemClick('Adidas Slides', 6000, "https://www.80scasualclassics.co.uk/images/adidas-adilette-sliders-white-black-p10986-66692_image.jpg")}>Add To Cart</button>
          </div>
        </div>

        <div className="image-container">
          <img src="https://i1.wp.com/hypebeast.com/image/2016/09/adidas-originals-yeezy-boost-350-v2-retail-list-01.jpg?quality=95&w=1755" alt="" width="80" />
          <div className="details">
            <p>Yeezy Boost 350 V2</p>
            <p>PKR 25000</p>
            <button className="add-to-cart-button" onClick={() => handleItemClick('Yeezy Boost 350 V2', 25000, "https://i1.wp.com/hypebeast.com/image/2016/09/adidas-originals-yeezy-boost-350-v2-retail-list-01.jpg?quality=95&w=1755")}>Add To Cart</button>
          </div>
        </div>

        <div className="image-container">
          <img src="https://tse2.mm.bing.net/th?id=OIP.TOdDYGmOVz5HvGvd0KAgvgHaHa&pid=Api&P=0&h=180" alt="" width="80" />
          <div className="details">
            <p>FusionX</p>
            <p>PKR 5000</p>
            <button className="add-to-cart-button" onClick={() => handleItemClick('FusionX', 5000, "https://tse2.mm.bing.net/th?id=OIP.TOdDYGmOVz5HvGvd0KAgvgHaHa&pid=Api&P=0&h=180")}>Add To Cart</button>
          </div>
        </div>

        <div className="image-container">
          <img src="https://cdn.shopify.com/s/files/1/2290/7887/files/F0580106410_2.jpg?v=1683106394&width=360" alt="" width="80" />
          <div className="details">
            <p>Drop Shoulder</p>
            <p>PKR 3000</p>
            <button className="add-to-cart-button" onClick={() => handleItemClick('Drop Shoulder', 3000, "https://cdn.shopify.com/s/files/1/2290/7887/files/F0580106410_2.jpg?v=1683106394&width=360")}>Add To Cart</button>
          </div>
        </div>
      </div>

      {showCart && (
        <div className="cart-page">
          <h2 style={{fontFamily:"-moz-initial",color:"red",fontWeight:"bold",fontStyle:"italic", fontfamily:'Times New Roman'}}>Shopping Cart</h2>
          {selectedItems.map((item, index) => (
            <div key={index} className="cart-item" style={{  color: 'black',fontWeight:'bold' }}>
              <img src={item.image} alt={item.name} width="120" />
              <div>
                <p>{item.name}</p>
                <p>PKR {item.price}</p>
              </div>
              <button className="delete-button" onClick={() => handleDeleteItem(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <div className="total-price">
            <p style={{fontWeight:"bold"}}>Total: PKR {calculateTotalPrice()}</p>
          </div>
          <div className='proceed'>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Mart;
