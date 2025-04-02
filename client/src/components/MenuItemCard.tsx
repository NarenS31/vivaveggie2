import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { formatCurrency } from '@/lib/utils';
import { MenuItem } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';

interface MenuItemCardProps {
  item: MenuItem;
  featured?: boolean;
}

export default function MenuItemCard({ item, featured = false }: MenuItemCardProps) {
  const { addToCart } = useCartStore();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your order.`,
      duration: 3000,
      variant: "default",
    });
  };
  
  return (
    <div 
      className={`menu-item-card ${featured ? 'group' : ''} overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-60 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
        />
        {featured && item.tags && item.tags.length > 0 && (
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}>
            <div className="p-4">
              <span className={`inline-block px-3 py-1 bg-${item.tags[0] === 'Best Seller' ? 'primary' : item.tags[0] === 'New' ? 'primary' : 'secondary'} text-white text-sm rounded-full mb-2`}>
                {item.tags[0]}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-medium`}>{item.name}</h3>
          <span className="text-lg font-medium text-primary">{formatCurrency(item.price)}</span>
        </div>
        <p className="text-neutral-dark text-sm mb-4">{item.description}</p>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-secondary hover:bg-amber-600 text-white"
        >
          Add to Order
        </Button>
      </div>
    </div>
  );
}
