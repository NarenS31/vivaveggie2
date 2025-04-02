import { useEffect } from 'react';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';
import CheckoutModal from '@/components/CheckoutModal';
import OrderConfirmation from '@/components/OrderConfirmation';
import HeroSection from '@/components/HeroSection';
import FeaturedItems from '@/components/FeaturedItems';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useCartStore } from '@/store/cartStore';

export default function Home() {
  const { isOpen } = useCartStore();
  
  useEffect(() => {
    // Handle body scroll when cart is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <>
      <Header />
      <ShoppingCart />
      <CheckoutModal />
      <OrderConfirmation />
      
      <main className="pt-16">
        <HeroSection />
        <FeaturedItems />
        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
