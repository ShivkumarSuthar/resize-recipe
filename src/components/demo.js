import React, { useState } from 'react';

function Demo() {
  const [originalServings, setOriginalServings] = useState(4);
  const [desiredServings, setDesiredServings] = useState(4);
  const [ingredients, setIngredients] = useState([
    { name: 'Ingredient 1', quantity: 1, unit: 'cup' },
    { name: 'Ingredient 2', quantity: 2, unit: 'tbsp' },
    // Add more ingredients as needed
  ]);

  const resizeRecipe = () => {
    const scaleFactor = desiredServings / originalServings;

    const resizedIngredients = ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * scaleFactor,
    }));

    // Update state with resized ingredients
    setIngredients(resizedIngredients);
  };

  return (
    <div>
      <h1>Recipe Resize Calculator</h1>
      <div>
        <label>
          Original Servings:
          <input
            type="number"
            value={originalServings}
            onChange={(e) => setOriginalServings(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Desired Servings:
          <input
            type="number"
            value={desiredServings}
            onChange={(e) => setDesiredServings(e.target.value)}
          />
        </label>
      </div>
      <button onClick={resizeRecipe}>Resize Recipe</button>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
