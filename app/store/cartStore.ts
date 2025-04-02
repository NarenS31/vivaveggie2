'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
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
  devtools(
    (set, get) => ({
      items: [],
      isOpen: false,
      checkoutModalOpen: false,
      confirmationModalOpen: false,
      orderNumber: null,
      checkoutData: null,
      
      addToCart: (item: MenuItem) => {
        const { items } = get();
        const existingItem = items.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
          set({
            items: items.map(cartItem => 
              cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
            )
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
      },
      
      removeFromCart: (itemId: string) => {
        const { items } = get();
        set({ items: items.filter(item => item.id !== itemId) });
      },
      
      increaseQuantity: (itemId: string) => {
        const { items } = get();
        set({
          items: items.map(item => 
            item.id === itemId 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        });
      },
      
      decreaseQuantity: (itemId: string) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === itemId);
        
        if (existingItem && existingItem.quantity === 1) {
          get().removeFromCart(itemId);
        } else {
          set({
            items: items.map(item => 
              item.id === itemId 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
            )
          });
        }
      },
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      closeCart: () => set({ isOpen: false }),
      openCart: () => set({ isOpen: true }),
      
      openCheckoutModal: () => set({ checkoutModalOpen: true, isOpen: false }),
      closeCheckoutModal: () => set({ checkoutModalOpen: false }),
      
      openConfirmationModal: (orderNumber: string) => {
        set({ 
          confirmationModalOpen: true, 
          checkoutModalOpen: false,
          orderNumber
        });
      },
      
      closeConfirmationModal: () => set({ confirmationModalOpen: false, orderNumber: null }),
      
      setCheckoutData: (data: CheckoutFormData) => {
        set({ checkoutData: data });
      },
      
      getSubtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      },
      
      getTax: () => {
        return calculateTax(get().getSubtotal());
      },
      
      getTotal: () => {
        return get().getSubtotal() + get().getTax();
      },
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);