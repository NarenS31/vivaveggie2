import { useState } from 'react';
import { getMenuCategories, getMenuItemsByCategory } from '@/data/menu';
import MenuItemCard from './MenuItemCard';

export default function MenuSection() {
  const categories = getMenuCategories();
  const [activeCategory, setActiveCategory] = useState('all');
  const menuItems = getMenuItemsByCategory(activeCategory);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    if (category === 'all') return 'All';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">Our Menu</h2>
          <p className="text-neutral-dark max-w-lg mx-auto">
            Explore our diverse selection of plant-based dishes made with fresh, seasonal ingredients.
          </p>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`menu-category mx-2 my-1 px-4 py-2 rounded-full hover:bg-primary-light transition-colors ${activeCategory === category ? 'active' : ''}`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
