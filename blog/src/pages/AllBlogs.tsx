import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
}

const AllBlogs: React.FC = () => {
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

  const handleAddBlog = () => {
    navigate('/add-blog/'); 
  };

  return (
    <div>

      <div className="add-blog-section flex justify-end p-4">
        <button
          onClick={handleAddBlog}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add New Blog
        </button>
      </div>

      <div className="top-recipes-section">
        <h2 className="section-title">Top Recipes</h2>
        <div className="recipe-cards">
          {recipes.slice(0, 4).map((recipe) => (
            <div key={recipe.id} className="recipe-card" onClick={() => handleNavigation(recipe.id)}>
              <img
                src={`http://127.0.0.1:8090/api/files/posts/${recipe.id}/${recipe.image}`}
                alt={recipe.title}
                className="recipe-img"
              />
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

export default AllBlogs;
