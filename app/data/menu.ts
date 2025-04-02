import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Garden Fresh Salad',
    description: 'A refreshing mix of seasonal greens, cherry tomatoes, cucumber, and house dressing',
    price: 9.99,
    image: '/images/garden-salad.jpg',
    category: 'salads',
    featured: true,
    tags: ['gluten-free', 'vegan']
  },
  {
    id: '2',
    name: 'Mediterranean Hummus Platter',
    description: 'Creamy hummus served with warm pita bread, olives, and fresh vegetables',
    price: 11.99,
    image: '/images/hummus-platter.jpg',
    category: 'appetizers',
    featured: true,
    tags: ['vegan']
  },
  {
    id: '3',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice cooked with assorted wild mushrooms and finished with parmesan',
    price: 16.99,
    image: '/images/mushroom-risotto.jpg',
    category: 'mains',
    featured: true,
    tags: ['gluten-free']
  },
  {
    id: '4',
    name: 'Veggie Deluxe Burger',
    description: 'Plant-based patty with lettuce, tomato, onion, and special sauce on a brioche bun',
    price: 14.99,
    image: '/images/veggie-burger.jpg',
    category: 'mains',
    tags: []
  },
  {
    id: '5',
    name: 'Buddha Bowl',
    description: 'Quinoa, roasted vegetables, avocado, and tahini sauce',
    price: 15.99,
    image: '/images/buddha-bowl.jpg',
    category: 'bowls',
    featured: true,
    tags: ['gluten-free', 'vegan']
  },
  {
    id: '6',
    name: 'Spinach and Feta Stuffed Mushrooms',
    description: 'Large portobello mushrooms filled with spinach, feta, and herbs',
    price: 12.99,
    image: '/images/stuffed-mushrooms.jpg',
    category: 'appetizers',
    tags: ['gluten-free']
  },
  {
    id: '7',
    name: 'Eggplant Parmesan',
    description: 'Layers of breaded eggplant, marinara sauce, and melted cheese',
    price: 17.99,
    image: '/images/eggplant-parmesan.jpg',
    category: 'mains',
    tags: []
  },
  {
    id: '8',
    name: 'Fresh Fruit Tart',
    description: 'Buttery crust filled with vanilla custard and topped with seasonal fruits',
    price: 8.99,
    image: '/images/fruit-tart.jpg',
    category: 'desserts',
    tags: []
  },
  {
    id: '9',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink with mango, cardamom, and a hint of rose water',
    price: 5.99,
    image: '/images/mango-lassi.jpg',
    category: 'drinks',
    tags: ['gluten-free']
  },
  {
    id: '10',
    name: 'Lentil Soup',
    description: 'Hearty soup made with red lentils, vegetables, and warming spices',
    price: 7.99,
    image: '/images/lentil-soup.jpg',
    category: 'appetizers',
    tags: ['gluten-free', 'vegan']
  },
  {
    id: '11',
    name: 'Vegetable Pad Thai',
    description: 'Rice noodles stir-fried with tofu, bean sprouts, and tamarind sauce',
    price: 15.99,
    image: '/images/pad-thai.jpg',
    category: 'mains',
    tags: ['vegan']
  },
  {
    id: '12',
    name: 'Chocolate Avocado Mousse',
    description: 'Rich and creamy dessert made with ripe avocados and dark chocolate',
    price: 8.99,
    image: '/images/chocolate-mousse.jpg',
    category: 'desserts',
    tags: ['gluten-free', 'vegan']
  }
];

export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter(item => item.featured);
};

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

export const getMenuCategories = (): string[] => {
  const categories = new Set<string>();
  menuItems.forEach(item => categories.add(item.category));
  return Array.from(categories);
};