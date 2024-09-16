import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '../components/Button'; 

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (recipe: string) => {
    navigate(`/blog?recipe=${recipe}`); 
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
          <div className="recipe-card" onClick={() => handleNavigation('Chocolate Cake')}>
            <img src="/images/chocolatecake.jpeg" alt="Recipe 1" className="recipe-img" />
            <h3 className="recipe-title">Chocolate Cake</h3>
          </div>
          <div className="recipe-card" onClick={() => handleNavigation('Strawberry Cheesecake')}>
            <img src="/images/strawberry1.jpg" alt="Recipe 2" className="recipe-img" />
            <h3 className="recipe-title">Strawberry Cheesecake</h3>
          </div>
          <div className="recipe-card" onClick={() => handleNavigation('Lemon Tart')}>
            <img src="/images/lemonpie.jpeg" alt="Recipe 3" className="recipe-img" />
            <h3 className="recipe-title">Lemon Tart</h3>
          </div>
          <div className="recipe-card" onClick={() => handleNavigation('Red Velvet Cupcake')}>
            <img src="/images/redvelvetcake1.png" alt="Recipe 4" className="recipe-img" />
            <h3 className="recipe-title">Red Velvet Cupcake</h3>
          </div>
        </div>
      </div>
     
      <div className="new-recipes-section">
        <h2 className="section-title">New Recipes</h2>
        <div className="new-recipes-content">
          <div className="new-recipe-image">
            <img src="/images/smoothie.png" alt="New Recipe" />
          </div>
          <div className="new-recipe-list">
            <h3 className="new-recipe-item" onClick={() => handleNavigation('Banana Bread')}>Banana Bread</h3>
            <p>A moist and delicious banana bread with a hint of vanilla.</p>

            <h3 className="new-recipe-item" onClick={() => handleNavigation('Matcha Cookies')}>Matcha Cookies</h3>
            <p>Soft and chewy cookies infused with earthy matcha flavor.</p>

            <h3 className="new-recipe-item" onClick={() => handleNavigation('Peach Cobbler')}>Peach Cobbler</h3>
            <p>A comforting dessert filled with fresh peaches and buttery crust.</p>

            <h3 className="new-recipe-item" onClick={() => handleNavigation('Tiramisu')}>Tiramisu</h3>
            <p>A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
