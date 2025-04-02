import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { formatCurrency } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  
  return (
    <div className="cart-item flex justify-between items-center border-b pb-4">
      <div className="flex items-center">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-16 h-16 object-cover rounded mr-3" 
        />
        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-neutral-dark text-sm">{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button 
          onClick={() => decreaseQuantity(item.id)}
          className="px-2 py-1 bg-neutral-light rounded-l"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="px-3 py-1 bg-white border-y">{item.quantity}</span>
        <button 
          onClick={() => increaseQuantity(item.id)}
          className="px-2 py-1 bg-neutral-light rounded-r"
          aria-label="Increase quantity"
        >
          +
        </button>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="ml-2 text-red-500"
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
