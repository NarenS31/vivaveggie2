import { ArrowRight } from 'lucide-react';
import { getFeaturedItems } from '@/data/menu';
import MenuItemCard from './MenuItemCard';
import { scrollToSection } from '@/lib/utils';

export default function FeaturedItems() {
  const featuredItems = getFeaturedItems();
  
  const handleViewFullMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('menu');
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">Our Signature Dishes</h2>
          <p className="text-neutral-dark max-w-lg mx-auto">
            Explore our chef's favorite creations, crafted with love and the freshest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} featured />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#menu" 
            onClick={handleViewFullMenu}
            className="inline-flex items-center font-medium text-primary hover:text-green-600 transition-colors"
          >
            View Full Menu 
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
