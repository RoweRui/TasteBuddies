import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQS from "./components/FAQS";
import RecipeDetails from "./components/RecipeDetails";
import data from "./recipes.json";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface Recipe {
  id: string; 
  title: string;
  ingredients: string[];
  instructions: string; 
  image: string; 
  description: string; 
  steps: string[]; 
  cookingTime: string; 
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const formattedData: Recipe[] = data.map((item: any) => ({
      id: item.id, 
      title: item.title,
      ingredients: item.ingredients,
      instructions: item.instructions || "", 
      image: item.image || "", 
      description: item.description || "", 
      steps: item.steps || [], 
      cookingTime: item.cookingTime || "" 
    }));
    
    setRecipes(formattedData);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;