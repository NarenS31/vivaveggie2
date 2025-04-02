import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Render rating stars
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">What Our Customers Say</h2>
          <p className="text-neutral-dark max-w-lg mx-auto">
            Hear from our satisfied customers about their experience at VivaVeggie Cuisine.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {renderRating(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-neutral-dark mb-6 italic">{testimonial.comment}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-dark">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              onClick={handlePrev}
              className="mx-2 bg-white hover:bg-gray-100 text-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="mx-2 bg-white hover:bg-gray-100 text-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
