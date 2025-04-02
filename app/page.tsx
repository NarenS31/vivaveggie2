'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Welcome to VivaVeggie</h1>
            <p className="text-lg md:text-xl mb-8">Delicious, fresh, and healthy vegetarian cuisine</p>
            <a 
              href="#menu" 
              className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium inline-block hover:bg-primary/90 transition-colors"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>
      
      <ShoppingCart />
    </main>
  );
}