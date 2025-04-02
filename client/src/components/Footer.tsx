import { scrollToSection } from '@/lib/utils';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    scrollToSection(section);
  };
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would call an API to subscribe the user
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter!",
      variant: "default",
    });
    
    setEmail('');
  };
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-display font-bold mb-4">
              Viva<span className="text-secondary">Veggie</span>
            </h3>
            <p className="max-w-xs mb-6">
              Delicious vegetarian cuisine made with fresh, locally-sourced ingredients. 
              Good for you, good for the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="hover:text-secondary transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-secondary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3" />
                <span>123 Green Street, Veggieville<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@vivaveggie.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                required
              />
              <Button 
                type="submit" 
                className="bg-secondary hover:bg-amber-600 text-white px-4 rounded-r-md"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 VivaVeggie Cuisine. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mr-4 text-sm hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="mr-4 text-sm hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-secondary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
