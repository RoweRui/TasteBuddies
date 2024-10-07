import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
  steps: string[];
  ingredients: string[];
  cookingTime: string;
}

interface RecipeDetailsProps {
  recipes: Recipe[];
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipes }) => {
  const { id } = useParams<{ id: string }>();
  const [recipeDetails, setRecipeDetails] = useState<Recipe | undefined>(undefined);

  useEffect(() => {
    const filteredRecipe = recipes.find((recipe) => recipe.id === id);
    setRecipeDetails(filteredRecipe);
  }, [id, recipes]);

  return (
    recipeDetails && (
      <div className="recipe-details">
        <img src={recipeDetails.image} alt={recipeDetails.title} />
        <br></br>
        <h1>{recipeDetails.title}</h1>        <br></br>

        <p>{recipeDetails.description}</p>
        <div>
          <h3>Steps:</h3>
          <ul>
            {recipeDetails.steps && recipeDetails.steps.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Ingredients:</h3>
          <ul>
            {recipeDetails.ingredients && recipeDetails.ingredients.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <h5>Cooking Time: {recipeDetails.cookingTime}</h5>
      </div>
    )
  );
};

export default RecipeDetails;