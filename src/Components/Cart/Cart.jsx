import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart,incrementQuantity,decrementQuantity } from '../../hooks/actions';
import CheckoutModal from '../Checks/CheckoutModal.jsx';
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
        console.log(cart)
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleOpenCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleCheckoutSubmit = (formData) => {
    // Aquí puedes manejar el envío del formulario de checkout
    console.log('Datos de checkout:', formData);
    // Luego puedes cerrar el modal
    handleCloseCheckoutModal();
  };

  return (
    <div className="text-black p-4 bg-white-600 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Carrito :</h1>
      {cart.length === 0 ? (
        <p>Tu carro está vacío.</p>
      ) : (
        <ul className="space-y-4 bg-white-900 p-4 rounded-lg border shadow-lg">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center border-b pb-4 last:border-b-0 shadow-lg">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-20 w-20 object-cover rounded-lg"
              />
              <div className="flex-grow ml-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <h3 className="text-xl font-semibold"> Color : {item.selectedColor}</h3>
                <h3 className="text-xl font-semibold"> Litros : {item.selectedLit}</h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
                >
                  x
                </button>
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length === 0 ? (
        ''
      ) : (
        <div className='flex justify-end items-end mt-5'>
          <button
            onClick={handleOpenCheckoutModal}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-2 py-1 rounded"
          >
            Comprar
          </button>
        </div>
      )}
      {isCheckoutModalOpen && (
        <CheckoutModal
          isOpen={isCheckoutModalOpen}
          onClose={handleCloseCheckoutModal}
          handleSubmit={handleCheckoutSubmit}
        />
      )}
    </div>
  );
};