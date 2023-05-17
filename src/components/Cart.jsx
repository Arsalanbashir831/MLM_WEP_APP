import React, { useState } from 'react';
import product1 from "../assets/loginMan.png";
import { Delete } from '@mui/icons-material';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleIncrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-3">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between items-center border-b py-2">
              <img
                src={product1}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="text-red-500 font-semibold"
                  onClick={() => handleDecrementQuantity(product.id)}
                >
                  -
                </button>
                <p className="mx-2">{product.quantity}</p>
                <button
                  className="text-green-500 font-semibold"
                  onClick={() => handleIncrementQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className="text-red-500 font-semibold"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <Delete></Delete>
              </button>
            </div>
          ))}
          {/* Add more product items here */}
        </div>   
         <div className="col-span-1">
         <div className="border p-4">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p className="text-gray-500 mb-2">
          Subtotal: ${(
            products.reduce((total, product) => total + product.price * product.quantity, 0)
          ).toFixed(2)}
        </p>
        {/* Shipping, tax, and other calculations */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  </div>
  {showModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2"
              onClick={handleModalClose}
            >
              Confirm
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleModalClose}
            >
              Close
            </button>
            {/* Add logic to handle payment submission */}
          </div>
        </form>
      </div>
    </div>
  )}
</div>
);
};

export default Cart;
