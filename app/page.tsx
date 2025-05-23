"use client";

import React, { useRef, useState } from "react";
import Header from "@/components/Header";
import ShoppingCart from "@/components/ShoppingCart";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import IngredientMap from "./components/IngredientMap";
import MenuSection from "./components/MenuSection";
import TeamSection from "./components/TeamSection";
import ProcessSection from "./components/ProcessSection";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import OriginStory from "./components/OriginStory";

export default function Home() {
  // References for scroll navigation
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const preorderRef = useRef<HTMLDivElement>(null);
  const ingredientMapRef = useRef<HTMLDivElement>(null);
  const virtualTourRef = useRef<HTMLDivElement>(null);
  const dynamicMenuRef = useRef<HTMLDivElement>(null);
  const originStoryRef = useRef<HTMLDivElement>(null);
  const loyaltyProgramRef = useRef<HTMLDivElement>(null);

  // Active tab state for menu navigation
  const [activeTab, setActiveTab] = useState("menu");

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Enhanced menu navigation that first scrolls to menu section, then switches tab
  const handleMenuClick = () => {
    scrollToSection(menuRef);
    setActiveTab("menu");
  };

  // Handler for ingredient map navigation
  const handleIngredientMapClick = () => {
    scrollToSection(ingredientMapRef);
  };

  // Handlers for new features navigation
  const handleVirtualTourClick = () => {
    scrollToSection(virtualTourRef);
  };

  const handleDynamicMenuClick = () => {
    scrollToSection(dynamicMenuRef);
  };

  const handleOriginStoryClick = () => {
    scrollToSection(originStoryRef);
  };

  const handleLoyaltyProgramClick = () => {
    scrollToSection(loyaltyProgramRef);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <ShoppingCart />

      <motion.div
        ref={homeRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection
          onMenuClick={handleMenuClick}
          onPreOrderClick={() => scrollToSection(preorderRef)}
        />
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
      </motion.div>

      <section className="divide-y divide-gray-200">
        <motion.div
          ref={processRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Farm to Table Process
          </h2>
          <ProcessSection />
        </motion.div>

        <motion.div
          ref={teamRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 pt-12">
            Meet Our Team
          </h2>
          <TeamSection />
        </motion.div>

        <motion.div
          ref={menuRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 pt-12">
            Our Menu
          </h2>
          <MenuSection />
        </motion.div>

        <motion.div
          ref={preorderRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 pt-12">
            Pre-Order Your Meal
          </h2>
          <OrderForm />
        </motion.div>

        {/* <motion.div
          ref={ingredientMapRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 pt-12">
            Local Ingredients Map
          </h2>
          <IngredientMap />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 pt-12">
            What Our Guests Say
          </h2>
          <TestimonialsSection />
        </motion.div>
      </section>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <VirtualTour />
      </motion.div> */}

      {/* <motion.div
        ref={dynamicMenuRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <DynamicMenu />
      </motion.div> */}

      <motion.div
        ref={originStoryRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <OriginStory />
      </motion.div>

      {/* <motion.div
        ref={loyaltyProgramRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading text-4xl md:text-5xl font-bold mb-4">
            Sustainability Rewards
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Join our loyalty program and earn rewards while supporting
            sustainable dining practices
          </p>
        </div>
        <LoyaltyProgramCard />
      </motion.div> */}

      <Footer />
    </main>
  );
}
