import { scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleExploreMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('menu');
  };
  
  const handleOurStory = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('about');
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center bg-primary-light">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" 
          alt="Fresh vegetarian food" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
            Delicious <span className="text-primary">Vegetarian</span> Cuisine
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Experience the freshest plant-based dishes made with locally sourced ingredients. 
            Healthy, delicious, and good for the planet.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={handleExploreMenu}
              className="bg-secondary hover:bg-amber-600 text-white py-6 px-8"
            >
              Explore Menu
            </Button>
            <Button 
              onClick={handleOurStory}
              variant="outline"
              className="bg-white hover:bg-gray-100 text-gray-800 border-gray-300 py-6 px-8"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
