'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem, CartItem, CheckoutFormData } from '@/types';
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
      
      // Cart actions
      addToCart: (item: MenuItem) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);
        
        if (existingItem) {
          // If item already in cart, increase quantity
          set({
            items: items.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          // Add new item to cart
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
        
        // Open cart when adding item
        if (!get().isOpen) {
          set({ isOpen: true });
        }
      },
      
      removeFromCart: (itemId: string) => {
        const { items } = get();
        set({ items: items.filter((item) => item.id !== itemId) });
      },
      
      increaseQuantity: (itemId: string) => {
        const { items } = get();
        set({
          items: items.map((item) =>
            item.id === itemId 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          ),
        });
      },
      
      decreaseQuantity: (itemId: string) => {
        const { items } = get();
        const itemToUpdate = items.find((item) => item.id === itemId);
        
        if (itemToUpdate && itemToUpdate.quantity > 1) {
          // Decrease quantity
          set({
            items: items.map((item) =>
              item.id === itemId 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
            ),
          });
        } else {
          // Remove item if quantity would become 0
          set({ items: items.filter((item) => item.id !== itemId) });
        }
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      // UI actions
      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },
      
      closeCart: () => {
        set({ isOpen: false });
      },
      
      openCart: () => {
        set({ isOpen: true });
      },
      
      openCheckoutModal: () => {
        set({ checkoutModalOpen: true, isOpen: false });
      },
      
      closeCheckoutModal: () => {
        set({ checkoutModalOpen: false });
      },
      
      openConfirmationModal: (orderNumber: string) => {
        set({ 
          confirmationModalOpen: true, 
          checkoutModalOpen: false,
          orderNumber,
        });
      },
      
      closeConfirmationModal: () => {
        set({ confirmationModalOpen: false, orderNumber: null });
      },
      
      setCheckoutData: (data: CheckoutFormData) => {
        set({ checkoutData: data });
      },
      
      // Calculations
      getSubtotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      getTax: () => {
        return calculateTax(get().getSubtotal());
      },
      
      getTotal: () => {
        const subtotal = get().getSubtotal();
        const tax = get().getTax();
        return subtotal + tax;
      },
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage', // Local storage key
    }
  )
);