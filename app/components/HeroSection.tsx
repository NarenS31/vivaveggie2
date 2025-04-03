import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onMenuClick: () => void;
  onPreOrderClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onMenuClick,
  onPreOrderClick,
}) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-24 pb-16 md:pt-32 md:pb-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Background overlay with gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-primary-dark to-primary/90 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Floating animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 md:w-7 md:h-7 rounded-full bg-accent opacity-30 blur-lg"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 50 + "%",
                Math.random() * 100 + "%",
              ],
              rotate: Math.random() > 0.5 ? 360 : -360,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Welcome to VivaVeggie
          </span>
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Charlotte's premier farm-to-table vegetarian restaurant
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button
            onClick={onMenuClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Explore Our Menu
          </motion.button>

          <motion.button
            onClick={onPreOrderClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Pre-Order Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
