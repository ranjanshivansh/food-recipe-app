import React from 'react';
import { Link } from 'react-router-dom';

const MealCards = ({ recipelist }) => {
  if (!recipelist || recipelist.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600 mt-6">
        No Recipe Found 
      </p>
    );
  }

  return (
    <>
            <h1 className='text-center text-lg'>Your Search Results</h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
      {recipelist.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="bg-white my-5 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-96 object-cover"
          />

          <div className="p-4 space-y-2">
            <p className="text-lg font-semibold text-gray-800">
              {recipe.strMeal}
            </p>
            <Link to={`/${recipe.idMeal}`}>
            <button className="mt-2 cursor-pointer px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
              View Recipe
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MealCards;
