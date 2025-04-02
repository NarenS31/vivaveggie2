import { NextResponse } from 'next/server';
import { menuItems, getFeaturedItems, getMenuItemsByCategory, getMenuCategories } from '@/data/menu';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  
  if (featured === 'true') {
    return NextResponse.json(getFeaturedItems());
  }
  
  if (category) {
    return NextResponse.json(getMenuItemsByCategory(category));
  }
  
  if (searchParams.has('categories')) {
    return NextResponse.json(getMenuCategories());
  }
  
  return NextResponse.json(menuItems);
}