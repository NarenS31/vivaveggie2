"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";

export default function Header() {
  const { openCart, getTotalItems } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle mobile menu toggle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  // Handle section navigation
  const handleNavClick = (id: string) => {
    scrollToSection(id);
    closeMenu();
  };

  return (
    // <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-sm z-50">
    //   <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    //     {/* Logo */}
    //     <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
    //       <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
    //         Viva Veggie
    //       </span>
    //     </Link>

    //     {/* Desktop Navigation */}
    //     <nav className="hidden md:flex space-x-8">
    //       <button
    //         onClick={() => handleNavClick('menu')}
    //         className="text-gray-700 hover:text-green-600 transition"
    //       >
    //         Menu
    //       </button>
    //       <button
    //         onClick={() => handleNavClick('about')}
    //         className="text-gray-700 hover:text-green-600 transition"
    //       >
    //         About
    //       </button>
    //       <button
    //         onClick={() => handleNavClick('testimonials')}
    //         className="text-gray-700 hover:text-green-600 transition"
    //       >
    //         Testimonials
    //       </button>
    //       <button
    //         onClick={() => handleNavClick('contact')}
    //         className="text-gray-700 hover:text-green-600 transition"
    //       >
    //         Contact
    //       </button>
    //     </nav>

    //     {/* Cart icon + counter */}
    //     <div className="flex items-center space-x-4">
    //       <button
    //         className="relative p-2 text-gray-700 hover:text-green-600 transition"
    //         onClick={openCart}
    //         aria-label="Open shopping cart"
    //       >
    //         <ShoppingBag />
    //         {getTotalItems() > 0 && (
    //           <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
    //             {getTotalItems()}
    //           </span>
    //         )}
    //       </button>

    //       {/* Mobile menu button */}
    //       <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
    //         {isMenuOpen ? <X /> : <Menu />}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile menu */}
    //   {isMenuOpen && (
    //     <div className="md:hidden bg-white shadow-md">
    //       <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
    //         <button
    //           onClick={() => handleNavClick('menu')}
    //           className="text-gray-700 hover:text-green-600 transition py-2 text-left"
    //         >
    //           Menu
    //         </button>
    //         <button
    //           onClick={() => handleNavClick('about')}
    //           className="text-gray-700 hover:text-green-600 transition py-2 text-left"
    //         >
    //           About
    //         </button>
    //         <button
    //           onClick={() => handleNavClick('testimonials')}
    //           className="text-gray-700 hover:text-green-600 transition py-2 text-left"
    //         >
    //           Testimonials
    //         </button>
    //         <button
    //           onClick={() => handleNavClick('contact')}
    //           className="text-gray-700 hover:text-green-600 transition py-2 text-left"
    //         >
    //           Contact
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </header>
    <nav className="bg-green-700 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link
            href="/"
            className="text-2xl font-semibold text-white tracking-wide hover:text-yellow-300 transition-colors"
          >
            VivaVeggie
          </Link>
          <div className="flex flex-wrap items-center text-sm gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#process", label: "Our Process" },
              { href: "#team", label: "Team" },
              { href: "#menu", label: "Menu" },
              { href: "#preorder", label: "Pre-Order" },
              { href: "#ingredient-map", label: "Ingredients" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#virtual-tour", label: "Virtual Tour" },
              { href: "#origin-story", label: "Our Story" },
              { href: "#sustainability-rewards", label: "Rewards" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white font-medium hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
