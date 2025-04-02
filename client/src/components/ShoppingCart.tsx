import { X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import CartItem from './CartItem';
import { formatCurrency } from '@/lib/utils';
import { useEffect } from 'react';

export default function ShoppingCart() {
  const { 
    isOpen, 
    items, 
    closeCart, 
    getSubtotal, 
    getTax, 
    getTotal,
    openCheckoutModal 
  } = useCartStore();
  
  // Hydrate cart store on client side
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  
  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
      <div className="p-4 bg-primary text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Order</h2>
        <button 
          onClick={closeCart}
          className="text-white focus:outline-none"
          aria-label="Close cart"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className={`p-4 space-y-4 ${items.length === 0 ? 'hidden' : ''}`}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className={`p-8 text-center ${items.length > 0 ? 'hidden' : ''}`}>
        <i className="fas fa-shopping-basket text-4xl text-neutral-dark mb-4"></i>
        <p className="text-lg font-medium">Your cart is empty</p>
        <p className="text-sm text-neutral-dark mt-2">Add some delicious items from our menu!</p>
      </div>
      
      {items.length > 0 && (
        <div className="p-4 bg-neutral-light mt-auto">
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>{formatCurrency(getSubtotal())}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-neutral-dark pb-4">
            <span>Tax</span>
            <span>{formatCurrency(getTax())}</span>
          </div>
          <div className="flex justify-between py-4 font-bold">
            <span>Total</span>
            <span>{formatCurrency(getTotal())}</span>
          </div>
          <button 
            onClick={openCheckoutModal}
            className="w-full bg-secondary hover:bg-amber-600 text-white py-3 rounded-md font-medium transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
