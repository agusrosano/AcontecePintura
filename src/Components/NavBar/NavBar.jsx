import React from 'react'
import { useNavigate } from 'react-router-dom';
import cart from '../../Assets/cart.png'
import logo from '../../Assets/aconteceGod.PNG'
export const NavBar = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  
  const goToHome = () => {
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black">
      <div className="flex-1 text-center ">
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-10 mx-auto" /> */}
        <button onClick={goToHome}>
          
          <img src={logo}
               className="h-100 w-100 flex-1 text-center pl-2"
               alt="" />
        </button>
      </div>
      <div className="flex space-x-4">
            <button
              onClick={goToCart}
              className="flex items-center justify-center text-white font-bold py-2 px-4 rounded hover:bg-slate-500 bg-slate-200"
              style={{ borderRadius: '150px' }}
            >
                  <img
                    src={cart}
                    alt="Cart"
                    className="h-6 w-6" // Ajusta el tamaño de la imagen aquí
                  />
            </button>

            <button
              className="hover:bg-slate-500 bg-slate-200 text-black font-bold py-2 px-4 rounded-full"
            >
              Contacto
            </button>
          </div>
    </nav>
  )
}
