import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { scrollToSection } from '@/lib/utils';

export default function Header() {
  const { toggleCart, getTotalItems } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    scrollToSection(section);
    setActiveSection(section);
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary text-2xl font-display font-bold">
            Viva<span className="text-secondary">Veggie</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`nav-link font-medium hover:text-primary transition-colors ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#menu"
            onClick={(e) => handleNavClick(e, 'menu')}
            className={`nav-link font-medium hover:text-primary transition-colors ${activeSection === 'menu' ? 'active' : ''}`}
          >
            Menu
          </a>
          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={`nav-link font-medium hover:text-primary transition-colors ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`nav-link font-medium hover:text-primary transition-colors ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
          <button 
            onClick={toggleCart}
            className="relative flex items-center"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </button>
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleCart}
            className="relative mr-4"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="text-neutral-text focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white pb-4 px-4 fade-in`}>
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className={`block py-2 text-center nav-link ${activeSection === 'home' ? 'active' : ''}`}
        >
          Home
        </a>
        <a 
          href="#menu"
          onClick={(e) => handleNavClick(e, 'menu')}
          className={`block py-2 text-center nav-link ${activeSection === 'menu' ? 'active' : ''}`}
        >
          Menu
        </a>
        <a 
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
          className={`block py-2 text-center nav-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          About
        </a>
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`block py-2 text-center nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
