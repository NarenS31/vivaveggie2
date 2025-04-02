export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f" 
              alt="Our restaurant interior" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-display font-bold mb-4">Our Story</h2>
            <p className="text-neutral-dark mb-4">
              VivaVeggie Cuisine was born out of a passion for plant-based food that doesn't compromise 
              on flavor or satisfaction. Founded in 2018 by Chef Maria Rodriguez, our restaurant is dedicated 
              to showcasing the incredible variety and deliciousness of vegetarian cuisine.
            </p>
            <p className="text-neutral-dark mb-4">
              We believe that eating plant-based should be exciting, flavorful, and accessible to everyone. 
              Every dish on our menu is carefully crafted to provide a memorable dining experience while 
              being kind to our planet.
            </p>
            <p className="text-neutral-dark mb-6">
              Our ingredients are sourced locally whenever possible, supporting sustainable farming practices 
              and reducing our carbon footprint. We're proud to be a part of the community, serving food 
              that's good for you and good for the earth.
            </p>
            <div className="flex flex-wrap items-center">
              <div className="mr-6 mb-4">
                <h3 className="font-medium text-lg">100%</h3>
                <p className="text-sm text-neutral-dark">Plant-based</p>
              </div>
              <div className="mr-6 mb-4">
                <h3 className="font-medium text-lg">Local</h3>
                <p className="text-sm text-neutral-dark">Sourced Ingredients</p>
              </div>
              <div className="mb-4">
                <h3 className="font-medium text-lg">Eco-friendly</h3>
                <p className="text-sm text-neutral-dark">Packaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
