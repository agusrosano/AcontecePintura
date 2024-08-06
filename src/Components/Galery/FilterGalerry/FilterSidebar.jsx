import React, { useState } from 'react';

const FilterSidebar = ({ selectedFilter, setSelectedFilter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
        <div className="w-72 p-4 mt-5 bg-white text-black shadow-md rounded h-full">
            <button
                className="w-full text-left text-xl font-bold flex justify-between items-center focus:outline-none"
                onClick={toggleDropdown}
            >
                Categorias
                <span>
                    {isDropdownOpen ? '▲' : '▼'}
                </span>
            </button>

            {isDropdownOpen && (
                <div>
                    <label className="block mb-2 mt-2">
                        <input
                            type="radio"
                            value="all"
                            checked={selectedFilter === 'all'}
                            onChange={() => setSelectedFilter('all')}
                            className="mr-2"
                        />
                        Todos
                    </label>
                    <label className="block mb-2">
                        <input
                            type="radio"
                            value="Latex"
                            checked={selectedFilter === 'Latex'}
                            onChange={() => setSelectedFilter('Latex')}
                            className="mr-2"
                        />
                        Latex
                    </label>
                    <label className="block mb-2">
                        <input
                            type="radio"
                            value="Impermeables"
                            checked={selectedFilter === 'Impermeables'}
                            onChange={() => setSelectedFilter('Impermeables')}
                            className="mr-2"
                        />
                        Impermeables
                    </label>
                    <label className="block mb-2">
                        <input
                            type="radio"
                            value="Esmaltes"
                            checked={selectedFilter === 'Esmaltes'}
                            onChange={() => setSelectedFilter('Esmaltes')}
                            className="mr-2"
                        />
                        Esmaltes
                    </label>
                </div>
            )}
        </div>
    );
};
  
export default FilterSidebar;