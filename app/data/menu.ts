import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  // Featured items
  {
    id: 'harvest-buddha-bowl',
    name: 'Harvest Buddha Bowl',
    description: 'Quinoa, roasted sweet potatoes, avocado, kale, and chickpeas with lemon tahini dressing.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'bowls',
    featured: true,
    tags: ['Best Seller']
  },
  {
    id: 'garden-fresh-salad',
    name: 'Garden Fresh Salad',
    description: 'Mixed greens, cherry tomatoes, cucumber, radish, carrot, and avocado with herb vinaigrette.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'salads',
    featured: true,
    tags: ['Staff Pick']
  },
  {
    id: 'mediterranean-platter',
    name: 'Mediterranean Platter',
    description: 'Homemade hummus, baba ganoush, falafel, tabbouleh, olives, and warm pita bread.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    category: 'appetizers',
    featured: true,
    tags: ['New']
  },
  
  // Appetizers
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    description: 'Toasted baguette topped with fresh tomatoes, basil, garlic, and olive oil.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf',
    category: 'appetizers'
  },
  {
    id: 'spring-rolls',
    name: 'Fresh Spring Rolls',
    description: 'Rice paper rolls filled with fresh vegetables, herbs, and rice noodles with peanut dipping sauce.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a',
    category: 'appetizers'
  },
  
  // Salads
  {
    id: 'mediterranean-salad',
    name: 'Mediterranean Salad',
    description: 'Romaine lettuce, cucumber, tomato, red onion, olives, and feta cheese with olive oil dressing.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af',
    category: 'salads'
  },
  
  // Main Courses
  {
    id: 'eggplant-parmesan',
    name: 'Eggplant Parmesan',
    description: 'Breaded eggplant, marinara sauce, mozzarella and parmesan cheese, served with pasta.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1598449426314-8b02525e8733',
    category: 'mains'
  },
  {
    id: 'mushroom-risotto',
    name: 'Wild Mushroom Risotto',
    description: 'Creamy arborio rice with assorted wild mushrooms, garlic, herbs, and parmesan cheese.',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db',
    category: 'mains'
  },
  
  // Bowls
  {
    id: 'power-protein-bowl',
    name: 'Power Protein Bowl',
    description: 'Brown rice, black beans, tofu, roasted vegetables, and avocado with chipotle lime sauce.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    category: 'bowls'
  },
  
  // Desserts
  {
    id: 'chocolate-avocado-mousse',
    name: 'Chocolate Avocado Mousse',
    description: 'Rich, creamy chocolate mousse made with avocados, cocoa, and maple syrup.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
    category: 'desserts'
  },
  {
    id: 'berry-crumble',
    name: 'Mixed Berry Crumble',
    description: 'Warm mixed berry base with a crisp oat and almond topping, served with coconut cream.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
    category: 'desserts'
  },
  
  // Drinks
  {
    id: 'green-detox-smoothie',
    name: 'Green Detox Smoothie',
    description: 'Spinach, kale, cucumber, green apple, ginger, and lemon juice.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1596392301391-6922e2d0165c',
    category: 'drinks'
  },
  {
    id: 'hibiscus-berry-iced-tea',
    name: 'Hibiscus Berry Iced Tea',
    description: 'Refreshing hibiscus tea with mixed berries and a hint of mint.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1544252890-c3e4f4c9b908',
    category: 'drinks'
  }
];

export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter(item => item.featured);
};

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  if (category === 'all') {
    return menuItems;
  }
  return menuItems.filter(item => item.category === category);
};

export const getMenuCategories = (): string[] => {
  const categories = ['all', ...new Set(menuItems.map(item => item.category))];
  return categories;
};