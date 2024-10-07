import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  title: string;
  image: string;
  cookingTime: string;
}

interface RecipesProps {
  recipes: Recipe[];
}

const Recipes = ({ recipes }: RecipesProps) => {
  const options = [
    "Recipes & Menus",
    "Share Your Recipe",
    "Custom Meal Plan",
    "Create Grocery Store",
    "Cooking Tips & Tricks",
  ];
  return (
    <>
      <article className="recipes">
        <section>
          {options.map((element: string) => {
            return <button key={element}>{element}</button>;
          })}
        </section>
        <section className="container">
          {recipes.slice(0, 8).map((element: Recipe, index: number) => {
            return <Card key={index} element={element} />;
          })}
        </section>
        <h3><center>Recommended Recipes</center></h3>
        <section className="container">
          {recipes.slice(8).map((element: Recipe, index: number) => {
            return <Card key={index} element={element} />;
          })}
        </section>
      </article>
    </>
  );
};

export default Recipes;

interface CardProps {
  element: Recipe;
}

const Card = ({ element }: CardProps) => {
  return (
    <Link to={`/recipe/${element.id}`} className="card">
      <img src={element.image} alt={element.title} />
      <h4>{element.title}</h4>
      <h4>{element.cookingTime}</h4>
    </Link>
  );
};