import React, { useState } from 'react';

const CheckoutModal = ({ isOpen, onClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    locality: ''
  });

  const [step, setStep] = useState('form'); // 'form' or 'payment'
  const [paymentMethod, setPaymentMethod] = useState('');
  const [expanded, setExpanded] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep('payment'); // Move to payment selection after form submission
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? '' : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 lg:w-1/2">
        {step === 'form' ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="firstName">Nombre</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="lastName">Apellido</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Teléfono</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="address">Dirección</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="locality">Localidad</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="locality"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={onClose}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Siguiente
                </button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Método de pago</h2>
            <div className="mb-4">
              <button
                className="flex items-center w-full p-2 mb-2 rounded bg-gray-100"
                onClick={() => toggleExpand('link')}
              >
                <span className="flex-grow">Link de pago</span>
                <svg
                  className={`w-4 h-4 transform ${expanded === 'link' ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15a.75.75 0 01-.6-.293L4.15 9.7a.75.75 0 011.1-1L10 12.1l4.75-4.4a.75.75 0 011.1 1l-5.25 5.25a.75.75 0 01-.6.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {expanded === 'link' && (
                <div className="p-4 border border-gray-300 rounded">
                  <p>Enlace de pago: <a href="link.mercadopago.com.ar/acontecepintureria" target="_blank" rel="noopener noreferrer">link.mercadopago.com.ar/acontecepintureria</a></p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <button
                className="flex items-center w-full p-2 mb-2 rounded bg-gray-100"
                onClick={() => toggleExpand('qr')}
              >
                <span className="flex-grow">QR</span>
                <svg
                  className={`w-4 h-4 transform ${expanded === 'qr' ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15a.75.75 0 01-.6-.293L4.15 9.7a.75.75 0 011.1-1L10 12.1l4.75-4.4a.75.75 0 011.1 1l-5.25 5.25a.75.75 0 01-.6.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {expanded === 'qr' && (
                <div className="p-4 border border-gray-300 rounded">
                  <img src="path_to_qr_image.png" alt="QR Code" className="w-full h-auto" />
                </div>
              )}
            </div>
            <div>
              <button
                className="flex items-center w-full p-2 mb-2 rounded bg-gray-100"
                onClick={() => toggleExpand('transfer')}
              >
                <span className="flex-grow">Transferencia bancaria</span>
                <svg
                  className={`w-4 h-4 transform ${expanded === 'transfer' ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15a.75.75 0 01-.6-.293L4.15 9.7a.75.75 0 011.1-1L10 12.1l4.75-4.4a.75.75 0 011.1 1l-5.25 5.25a.75.75 0 01-.6.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {expanded === 'transfer' && (
                <div className="p-4 border border-gray-300 rounded">
                  <p>CVU: 12345678901234567890</p>
                  <p>Alias: ejemplo-alias</p>
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setStep('form')}
              >
                Regresar
              </button>
              <button
                type="button"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleSubmit(formData)} // Handle the final submit here
              >
                Finalizar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;