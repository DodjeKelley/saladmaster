export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">About Sharon & Dhong</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">Partners in life and in healthy cooking, bringing the Saladmaster experience to your home.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/14089600/pexels-photo-14089600.jpeg" 
                alt="Sharon and Dhong cooking together" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="font-heading font-semibold text-2xl mb-4">Our Story</h3>
            <p className="mb-4 text-gray-700">
              Sharon and Dhong have been authorized Saladmaster distributors (Trinity4Health) since 2020, serving the Santa Clarita community and beyond. Together they bring years of experience in nutrition and home cooking, helping families prepare healthy meals with professional quality cookware.
            </p>
            <p className="mb-6 text-gray-700">
              As certified Saladmaster coaches, they conduct interactive cooking classes ("cooking shows") in your home or virtually, demonstrating how to use 316Ti stainless Saladmaster pots and pans for maximum nutrition and flavor.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-6">
              <h4 className="font-heading font-semibold text-xl mb-2 text-primary">Our Mission</h4>
              <p className="text-gray-700">
                To empower families with the knowledge and tools to prepare healthier, more nutritious meals using waterless cooking methods that preserve vitamins and minerals.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified Coaches</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>In-Home Demonstrations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Virtual Cooking Shows</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Wellness Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
