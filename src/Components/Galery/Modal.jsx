import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, painting, handleAddToCart }) => {
    const [selectedColor, setSelectedColor] = useState(painting.colors ? painting.colors[0] : '');
    const [selectedLit, setSelectedLit] = useState(painting.Litros ? painting.Litros[0] : '');
    const [quantity, setQuantity] = useState(1);
  
    if (!isOpen) return null;
  
    const handleColorChange = (e) => {
      setSelectedColor(e.target.value);
    };
  
    const handleLitChange = (e) => {
      setSelectedLit(e.target.value);
    };
  
    const handleAddToCartClick = () => {
      const newItem = {
        ...painting,
        selectedColor,
        selectedLit,
        quantity
      };
      console.log(newItem)
      handleAddToCart(newItem);
    };
  
    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Evita que la cantidad sea menor que 1
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-3/4 flex flex-col lg:flex-row">
          {/* Imagen de la pintura */}
          <div className="w-1/2 h-1/2 p-4">
            <img src={painting.imageUrl} alt={painting.title} className=" object-cover rounded-lg" />
          </div>
          {/* Detalles de la pintura */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">{painting.title}</h2>
              <p className="mb-2"><strong>Tipo:</strong> {painting.Tipo}</p>
              <p className="mb-2"><strong>Descripción:</strong> {painting.description}</p>
              {/* Selector de colores */}
              <div className="mb-4">
                <label htmlFor="colorSelector" className="block mb-2 font-bold">Colores Disponibles</label>
                <select
                  id="colorSelector"
                  value={selectedColor}
                  onChange={handleColorChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {painting.color && painting.color.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              {/* Selector de litros */}
              <div className="mb-4">
                <label htmlFor="litSelector" className="block mb-2 font-bold">Litros:</label>
                <select
                  id="litSelector"
                  value={selectedLit}
                  onChange={handleLitChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {painting.Litros && painting.Litros.map((lit) => (
                    <option key={lit} value={lit}>{lit}</option>
                  ))}
                </select>
              </div>
              {/* Selector de cantidad */}
              <div className="mb-4 flex items-center">
                <label htmlFor="quantity" className="block mb-2 font-bold">Cantidad:</label>
                <div className="flex items-center ml-4">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <span className="mx-4">{quantity}</span>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
  
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddToCartClick}
              >
                Add to Cart
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;