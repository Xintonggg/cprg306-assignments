'use client';

import { useState, useEffect } from 'react';

const fetchMealIdeasWithDetails = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();

  if (!data.meals) return [];

  // 获取每道菜的详细信息
  const mealDetailsPromises = data.meals.map(async (meal) => {
    const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
    const detailsData = await detailsResponse.json();
    return detailsData.meals[0];
  });

  return Promise.all(mealDetailsPromises);
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [noMealFound, setNoMealFound] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        setOpen(true);
        const fetchedMeals = await fetchMealIdeasWithDetails(ingredient);
        if (fetchedMeals.length === 0) {
          setNoMealFound(true);
          setMeals([]);
        } else {
          setNoMealFound(false);
          setMeals(fetchedMeals);
        }
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} (${meal[`strMeasure${i}`]})`);
      } else {
        break;
      }
    }
    return ingredients;
  };

  const handleMealClick = (mealId) => {
    setSelectedMeal(mealId === selectedMeal ? null : mealId);
  };

  return (
    <div
      className={` max-w-2xl mx-auto overflow-hidden transition-all duration-500 
        ${open ? 'opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      <div className="bg-white rounded-lg p-4 mt-4">
        <h2 className="text-2xl font-bold text-yellow-30 mb-4">
          Meal Ideas for {ingredient}
        </h2>

        {noMealFound ? (
          <p className="text-gray-300">No meal ideas found.</p>
        ) : (
          <ul className="space-y-2">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                onClick={() => handleMealClick(meal.idMeal)}
                className={`bg-pink-300 p-3 rounded-md cursor-pointer transition 
                  ${selectedMeal === meal.idMeal ? 'bg-pink-300' : 'hover:bg-yellow-200'}
                `}
              >
                <h3 className="font-bold">{meal.strMeal}</h3>

                {/* 如果是选中状态，展开显示详细配方 */}
                {selectedMeal === meal.idMeal && (
                  <div className="mt-2 text-gray-800 bg-yellow-100 rounded-md p-2">
                    <h4 className="font-semibold mb-1">Ingredients:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {getIngredients(meal).map((ing, index) => (
                        <li key={index}>{ing}</li>
                      ))}
                    </ul>
                    {meal.strInstructions && (
                      <div className="mt-2">
                        <h4 className="font-semibold mb-1">Instructions:</h4>
                        <p className="text-sm whitespace-pre-line">{meal.strInstructions}</p>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="mt-3 px-4 py-2 bg-yellow-300 text-yellow-900 rounded-md hover:bg-yellow-400"
        >
          {open ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}
