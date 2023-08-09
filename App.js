import React, { useState } from 'react';
import './RecipeBook.css'; 

function RecipeBook() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' });

  const addRecipe = () => {
    if (newRecipe.title.trim() !== '' && newRecipe.ingredients.trim() !== '' && newRecipe.instructions.trim() !== '') {
      setRecipes([...recipes, newRecipe]);
      setNewRecipe({ title: '', ingredients: '', instructions: '' });
    }
  };

  const deleteRecipe = index => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipe-book">
      <h2>Recipe Book</h2>
      <div className="add-recipe">
        <input
          type="text"
          placeholder="Title"
          value={newRecipe.title}
          onChange={e => setNewRecipe({ ...newRecipe, title: e.target.value })}
        />
        <textarea
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={e => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={e => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <li key={index} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <button onClick={() => deleteRecipe(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeBook;
