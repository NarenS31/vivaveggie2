'use client';

import React from 'react';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ShoppingCart />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:py-32 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                Fresh, Vibrant &<br />Vegetarian Cuisine
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience the magic of plant-based cooking at Viva Veggie. 
                Our dishes celebrate seasonal ingredients with bold, international flavors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
                >
                  View Menu
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition font-medium"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10" />
                {/* Will be loaded from public directory */}
                <img 
                  src="/images/hero-image.jpg" 
                  alt="Beautifully plated vegetarian dishes" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="font-medium text-green-800">Open 7 days a week</p>
                    <p className="text-sm text-gray-700">11:00am - 10:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From hearty mains to refreshing salads and indulgent desserts, our menu celebrates 
              plant-based ingredients with globally-inspired recipes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category cards will be loaded dynamically from API */}
            {['Appetizers', 'Mains', 'Desserts'].map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`/images/category-${category.toLowerCase()}.jpg`} 
                    alt={category} 
                    className="w-full h-full object-cover transition hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">
                    {category === 'Appetizers' && 'Start your meal with our flavorful small plates.'}
                    {category === 'Mains' && 'Hearty and satisfying plant-based entrées.'}
                    {category === 'Desserts' && 'Sweet treats to perfectly end your meal.'}
                  </p>
                  <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition text-sm font-medium">
                    View {category}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium">
              View Full Menu
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Viva Veggie was born from a passion for proving that plant-based cooking can be exciting, 
                satisfying, and accessible to everyone. What started as a small café in 2015 has grown 
                into a beloved restaurant with a mission to change how people think about vegetarian food.
              </p>
              <p className="text-gray-700 mb-4">
                We source locally whenever possible, minimize waste, and create dishes that celebrate 
                the natural flavors of seasonal ingredients. Our team of chefs draws inspiration from 
                global cuisines to create unique, flavorful dishes that appeal to vegetarians and meat-eaters alike.
              </p>
              <div className="flex items-center space-x-6 mt-8">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-green-600">100%</span>
                  <span className="text-sm text-gray-600">Vegetarian</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-green-600">Local</span>
                  <span className="text-sm text-gray-600">Sourcing</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-green-600">Eco</span>
                  <span className="text-sm text-gray-600">Friendly</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/restaurant-interior.jpg" 
                  alt="Viva Veggie restaurant interior" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about their Viva Veggie experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards will be loaded from API */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                    <img 
                      src={`/images/testimonials/person-${index}.jpg`} 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Customer Name</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra."
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition font-medium">
              View All Reviews
            </button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-700">123 Plant Street, Veggietown, VG 12345</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-700">Monday-Friday: 11:00am - 10:00pm</p>
                    <p className="text-gray-700">Saturday-Sunday: 10:00am - 11:00pm</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
                    <p className="text-gray-700">Phone: (555) 123-4567</p>
                    <p className="text-gray-700">Email: info@vivaveggie.com</p>
                  </div>
                </div>
                
                <div className="mt-6 h-60 bg-gray-200 rounded-lg">
                  {/* Map will be added here */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Map Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Viva Veggie</h3>
              <p className="text-gray-400">
                Delicious plant-based cuisine for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">Menu</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">About</button></li>
                <li><button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">Testimonials</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates and special offers</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Viva Veggie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}