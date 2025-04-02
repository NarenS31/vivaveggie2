import { NextResponse } from 'next/server';
import { menuItems, getMenuItemsByCategory, getMenuCategories } from '@/data/menu';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  
  if (category) {
    // If category is provided, return items from that category
    const items = getMenuItemsByCategory(category);
    return NextResponse.json(items);
  } else {
    // Get categories query param
    const categoriesOnly = url.searchParams.get('categories');
    
    if (categoriesOnly === 'true') {
      // If categories only is requested, return just the categories
      const categories = getMenuCategories();
      return NextResponse.json(categories);
    }
    
    // Otherwise return all menu items
    return NextResponse.json(menuItems);
  }
}