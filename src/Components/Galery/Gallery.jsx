import React, { useState } from 'react';
import paintings from '../../data/Paintings';
import FilterSidebar from './FilterGalerry/FilterSidebar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../hooks/actions';
import { Footer } from '../Footer/Footer';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const dispatch = useDispatch();

  const filteredPaintings = selectedFilter === 'all'
    ? paintings
    : paintings.filter(painting => painting.Tipo === selectedFilter);


    const handleAddToCart = (painting) => {
      //console.log(painting)
      dispatch(addToCart(painting));
    };  

  return (
    <div className="flex">
      <FilterSidebar selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}  />
        <div className="w-3/4 p-4">
          {/* <h1 className="text-2xl font-bold mb-4 text-center">Paintings Gallery</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPaintings.map(painting => (
              <div key={painting.id} className=" text-black shadow-xl rounded p-4  dark:bg-white-800 border-orange-600" style={{border:'10px solid ea580c'}} >
                <img src={painting.imageUrl} alt={painting.title} className="w-full h-64 object-cover rounded mb-4" />
                <h2 className="text-xl font-semibold">{painting.title}</h2>
                <p>Color: {painting.color}</p>
                <p>Litros: {painting.Litros}</p>
                <p>Tipo: {painting.Tipo}</p>
                  <div className='flex justify-center items-center
                  mt-3'>
                    <button 
                          className="bg-amber-600 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleAddToCart(painting)}>
                          Agregar
                    </button>
                  </div>  
              </div>
            ))}
          </div>
        </div>

    </div>
     
);
}

export default Gallery;