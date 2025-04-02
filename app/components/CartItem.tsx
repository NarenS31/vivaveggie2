'use client';

import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItemType } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { formatCurrency } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-0">
      {/* Product image */}
      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-xs text-gray-500">No image</span>
          </div>
        )}
      </div>
      
      {/* Product details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
        <p className="text-sm text-gray-500 mt-0.5">{formatCurrency(item.price)}</p>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center space-x-2 ml-4">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          <Minus size={16} className="text-gray-600" />
        </button>
        
        <span className="text-sm font-medium text-gray-700 w-6 text-center">
          {item.quantity}
        </span>
        
        <button
          onClick={() => increaseQuantity(item.id)}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus size={16} className="text-gray-600" />
        </button>
      </div>
      
      {/* Item total */}
      <div className="ml-4 text-right">
        <p className="text-sm font-medium text-gray-900">
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>
      
      {/* Remove button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-3 p-1 text-gray-400 hover:text-red-500 transition"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}