import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import axios from 'axios';

interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8090/api/collections/posts/records');
      const items = response.data.items;
      const recipes = items.map((item: any) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        description: item.description,
      }));
      setRecipes(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleNavigation = (id: string) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
     
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-slogan">Savor the Sweetest Delights</h1>
            <p className="hero-subheader">Explore our collection of mouthwatering desserts that bring joy to every bite.</p>
            <Button variant="primary" size="large">Discover Our Desserts</Button>
          </div>
          <div className="hero-image"></div>
        </div>
      </div>

    
      <div className="top-recipes-section">
        <h2 className="section-title">Top Recipes</h2>
        <div className="recipe-cards">
          {recipes.slice(0, 4).map((recipe) => (
            <div key={recipe.id} className="recipe-card" onClick={() => handleNavigation(recipe.id)}>
              <img src={`http://127.0.0.1:8090/api/files/posts/${recipe.id}/${recipe.image}`} alt={recipe.title} className="recipe-img" />
              <h3 className="recipe-title">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="new-recipes-section">
        <h2 className="section-title">New Recipes</h2>
        <div className="new-recipes-content">
          <div className="new-recipe-image">
            <img src="http://127.0.0.1:8090/api/files/smoothie.png" alt="New Recipe" />
          </div>
          <div className="new-recipe-list">
            {recipes.slice(4).map((recipe) => (
              <div key={recipe.id} className="new-recipe-item" onClick={() => handleNavigation(recipe.id)}>
                <h3 className="new-recipe-title">{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
