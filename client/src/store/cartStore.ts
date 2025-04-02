import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, MenuItem, CheckoutFormData } from '@/types';
import { calculateTax } from '@/lib/utils';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  checkoutModalOpen: boolean;
  confirmationModalOpen: boolean;
  orderNumber: string | null;
  checkoutData: CheckoutFormData | null;
  
  // Cart actions
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  clearCart: () => void;
  
  // UI actions
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
  openConfirmationModal: (orderNumber: string) => void;
  closeConfirmationModal: () => void;
  setCheckoutData: (data: CheckoutFormData) => void;
  
  // Calculations
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      checkoutModalOpen: false,
      confirmationModalOpen: false,
      orderNumber: null,
      checkoutData: null,
      
      addToCart: (item: MenuItem) => {
        const { items } = get();
        const existingItem = items.find((cartItem) => cartItem.id === item.id);
        
        if (existingItem) {
          set({
            items: items.map((cartItem) => 
              cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
            )
          });
        } else {
          set({ 
            items: [...items, { ...item, quantity: 1 }]
          });
        }
      },
      
      removeFromCart: (itemId: string) => {
        set({ 
          items: get().items.filter((item) => item.id !== itemId)
        });
      },
      
      increaseQuantity: (itemId: string) => {
        set({
          items: get().items.map((item) =>
            item.id === itemId 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        });
      },
      
      decreaseQuantity: (itemId: string) => {
        const item = get().items.find((item) => item.id === itemId);
        
        if (item && item.quantity > 1) {
          set({
            items: get().items.map((item) =>
              item.id === itemId 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
            )
          });
        } else if (item && item.quantity === 1) {
          get().removeFromCart(itemId);
        }
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },
      
      closeCart: () => {
        set({ isOpen: false });
      },
      
      openCart: () => {
        set({ isOpen: true });
      },
      
      openCheckoutModal: () => {
        set({ 
          checkoutModalOpen: true,
          isOpen: false 
        });
      },
      
      closeCheckoutModal: () => {
        set({ checkoutModalOpen: false });
      },
      
      openConfirmationModal: (orderNumber: string) => {
        set({ 
          confirmationModalOpen: true,
          checkoutModalOpen: false,
          orderNumber
        });
      },
      
      closeConfirmationModal: () => {
        set({ 
          confirmationModalOpen: false,
          orderNumber: null,
          checkoutData: null
        });
        get().clearCart();
      },
      
      setCheckoutData: (data: CheckoutFormData) => {
        set({ checkoutData: data });
      },
      
      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity, 
          0
        );
      },
      
      getTax: () => {
        return calculateTax(get().getSubtotal());
      },
      
      getTotal: () => {
        return get().getSubtotal() + get().getTax();
      },
      
      getTotalItems: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity, 
          0
        );
      }
    }),
    {
      name: 'viva-veggie-cart',
      skipHydration: true,
    }
  )
);
