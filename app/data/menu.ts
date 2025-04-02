import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'app1',
    name: 'Crispy Cauliflower Wings',
    description: 'Crispy cauliflower florets tossed in your choice of buffalo, BBQ, or sweet chili sauce.',
    price: 9.99,
    image: '/images/cauliflower-wings.jpg',
    category: 'appetizers',
    featured: true,
    tags: ['spicy', 'shareable', 'gluten-free']
  },
  {
    id: 'app2',
    name: 'Loaded Nachos',
    description: 'Corn tortilla chips topped with plant-based queso, black beans, pico de gallo, guacamole, and jalapeños.',
    price: 11.99,
    image: '/images/loaded-nachos.jpg',
    category: 'appetizers',
    tags: ['shareable', 'spicy']
  },
  {
    id: 'app3',
    name: 'Avocado Bruschetta',
    description: 'Toasted sourdough topped with smashed avocado, cherry tomatoes, basil, and balsamic glaze.',
    price: 8.99,
    image: '/images/avocado-bruschetta.jpg',
    category: 'appetizers',
    tags: ['shareable']
  },
  {
    id: 'app4',
    name: 'Truffle Fries',
    description: 'Crispy hand-cut fries tossed with truffle oil, herbs, and vegan parmesan.',
    price: 7.99,
    image: '/images/truffle-fries.jpg',
    category: 'appetizers',
    tags: ['shareable', 'gluten-free']
  },

  // Salads
  {
    id: 'sal1',
    name: 'Superfood Salad',
    description: 'Kale, quinoa, roasted sweet potatoes, avocado, and pomegranate seeds with lemon vinaigrette.',
    price: 12.99,
    image: '/images/superfood-salad.jpg',
    category: 'salads',
    featured: true,
    tags: ['healthy', 'gluten-free']
  },
  {
    id: 'sal2',
    name: 'Mediterranean Salad',
    description: 'Mixed greens, cucumber, cherry tomatoes, red onion, olives, and vegan feta with herb dressing.',
    price: 11.99,
    image: '/images/mediterranean-salad.jpg',
    category: 'salads',
    tags: ['healthy', 'gluten-free']
  },
  {
    id: 'sal3',
    name: 'Caesar Salad',
    description: 'Romaine lettuce, plant-based chicken, vegan parmesan, and herbed croutons with creamy caesar dressing.',
    price: 13.99,
    image: '/images/caesar-salad.jpg',
    category: 'salads',
    tags: ['protein']
  },
  {
    id: 'sal4',
    name: 'Asian Crunch Salad',
    description: 'Napa cabbage, carrots, edamame, mandarin oranges, and crispy wontons with sesame ginger dressing.',
    price: 12.99,
    image: '/images/asian-crunch-salad.jpg',
    category: 'salads',
    tags: ['healthy']
  },

  // Main Courses
  {
    id: 'main1',
    name: 'Plant-Based Burger',
    description: 'Beyond Meat patty, vegan cheese, lettuce, tomato, onion, and special sauce on a brioche bun. Served with fries.',
    price: 15.99,
    image: '/images/plant-burger.jpg',
    category: 'mains',
    featured: true,
    tags: ['protein', 'filling']
  },
  {
    id: 'main2',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms, white wine, and truffle oil.',
    price: 16.99,
    image: '/images/mushroom-risotto.jpg',
    category: 'mains',
    tags: ['gluten-free', 'filling']
  },
  {
    id: 'main3',
    name: 'Eggplant Parmesan',
    description: 'Breaded eggplant slices, marinara sauce, and vegan mozzarella. Served with spaghetti.',
    price: 14.99,
    image: '/images/eggplant-parm.jpg',
    category: 'mains',
    tags: ['filling']
  },
  {
    id: 'main4',
    name: 'Jackfruit Tacos',
    description: 'Three corn tortillas with pulled BBQ jackfruit, slaw, pico de gallo, and avocado crema.',
    price: 13.99,
    image: '/images/jackfruit-tacos.jpg',
    category: 'mains',
    tags: ['gluten-free', 'spicy']
  },
  {
    id: 'main5',
    name: 'Coconut Curry',
    description: 'Fresh vegetables and tofu in a coconut curry sauce. Served with basmati rice.',
    price: 15.99,
    image: '/images/coconut-curry.jpg',
    category: 'mains',
    tags: ['gluten-free', 'spicy']
  },
  
  // Bowls
  {
    id: 'bowl1',
    name: 'Buddha Bowl',
    description: 'Brown rice, roasted sweet potatoes, chickpeas, avocado, kale, and tahini dressing.',
    price: 14.99,
    image: '/images/buddha-bowl.jpg',
    category: 'bowls',
    featured: true,
    tags: ['healthy', 'protein', 'gluten-free']
  },
  {
    id: 'bowl2',
    name: 'Teriyaki Tofu Bowl',
    description: 'Jasmine rice, teriyaki-glazed tofu, broccoli, carrots, edamame, and sesame seeds.',
    price: 13.99,
    image: '/images/teriyaki-tofu-bowl.jpg',
    category: 'bowls',
    tags: ['protein']
  },
  {
    id: 'bowl3',
    name: 'Mexican Bowl',
    description: 'Cilantro lime rice, black beans, corn, roasted peppers, guacamole, and chipotle aioli.',
    price: 13.99,
    image: '/images/mexican-bowl.jpg',
    category: 'bowls',
    tags: ['gluten-free', 'spicy']
  },
  {
    id: 'bowl4',
    name: 'Mediterranean Bowl',
    description: 'Quinoa, falafel, cucumber, tomatoes, olives, hummus, and tzatziki sauce.',
    price: 14.99,
    image: '/images/mediterranean-bowl.jpg',
    category: 'bowls',
    tags: ['protein', 'healthy']
  },
  
  // Desserts
  {
    id: 'des1',
    name: 'Chocolate Avocado Mousse',
    description: 'Smooth, rich chocolate mousse made with ripe avocados and topped with coconut whipped cream.',
    price: 7.99,
    image: '/images/chocolate-mousse.jpg',
    category: 'desserts',
    tags: ['gluten-free']
  },
  {
    id: 'des2',
    name: 'Berry Cheesecake',
    description: 'Creamy cashew-based cheesecake with a graham cracker crust and fresh berry compote.',
    price: 8.99,
    image: '/images/berry-cheesecake.jpg',
    category: 'desserts',
    featured: true,
    tags: ['seasonal']
  },
  {
    id: 'des3',
    name: 'Warm Apple Crumble',
    description: 'Baked cinnamon apples with a crisp oat topping. Served with vanilla bean ice cream.',
    price: 7.99,
    image: '/images/apple-crumble.jpg',
    category: 'desserts',
    tags: ['warm']
  },
  {
    id: 'des4',
    name: 'Brownie Sundae',
    description: 'Warm fudge brownie topped with vanilla ice cream, chocolate sauce, and candied walnuts.',
    price: 8.99,
    image: '/images/brownie-sundae.jpg',
    category: 'desserts',
    tags: ['warm', 'shareable']
  },
  
  // Drinks
  {
    id: 'dr1',
    name: 'Fresh Pressed Juice',
    description: 'Choice of orange, carrot, apple, or green juice, freshly made to order.',
    price: 5.99,
    image: '/images/fresh-juice.jpg',
    category: 'drinks',
    tags: ['healthy', 'refreshing']
  },
  {
    id: 'dr2',
    name: 'Superfood Smoothie',
    description: 'Blend of mixed berries, banana, spinach, almond milk, and plant-based protein.',
    price: 6.99,
    image: '/images/superfood-smoothie.jpg',
    category: 'drinks',
    featured: true,
    tags: ['healthy', 'protein']
  },
  {
    id: 'dr3',
    name: 'Herbal Iced Tea',
    description: 'Hibiscus, mint, or chamomile tea, served over ice with a touch of agave.',
    price: 3.99,
    image: '/images/herbal-tea.jpg',
    category: 'drinks',
    tags: ['refreshing']
  },
  {
    id: 'dr4',
    name: 'Matcha Latte',
    description: 'Premium grade matcha whisked with steamed oat milk.',
    price: 4.99,
    image: '/images/matcha-latte.jpg',
    category: 'drinks',
    tags: ['warm']
  }
];

// Get featured items for homepage
export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter(item => item.featured);
};

// Get menu items by category
export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

// Get unique menu categories
export const getMenuCategories = (): string[] => {
  const categories = menuItems.map(item => item.category);
  return [...new Set(categories)];
};