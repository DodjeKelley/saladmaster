import ownersPhoto from "../assets/images/ownersphoto.jpg";

export default function About() {
  return (
    <section id="about" className="pt-5 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-4">Meet Your Coaches</div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">About Sharon & Alden</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">Partners in life and in healthy cooking, bringing the Saladmaster experience to your home with passion and expertise.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={ownersPhoto} 
                alt="Sharon and Alden enjoying their time in Hawaii" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-gradient-to-t from-black/30 to-transparent absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center italic">Sharon and Alden celebrating in Hawaii</p>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="font-heading font-semibold text-2xl mb-4">Our Story</h3>
            <p className="mb-4 text-gray-700">
              Sharon and Alden have been authorized Saladmaster distributors since 2020, serving the Orange County community and all of Southern California. Their journey began when they discovered how Saladmaster cookware revolutionized their own health and cooking habits.
            </p>
            <p className="mb-4 text-gray-700">
              Together they bring years of experience in nutrition and healthy home cooking, helping families prepare nutritious meals using professional-quality cookware that preserves vitamins and minerals.
            </p>
            <p className="mb-6 text-gray-700">
              As certified Saladmaster coaches, they conduct interactive cooking classes in your home or virtually, demonstrating how to use 316Ti surgical stainless steel Saladmaster pots and pans for maximum nutrition and flavor without adding oils or fats while maximixing food hydration.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-6">
              <h4 className="font-heading font-semibold text-xl mb-2 text-primary">Our Mission</h4>
              <p className="text-gray-700">
                To empower families with the knowledge and tools to prepare healthier, more nutritious meals using new cooking methods that preserve more vitamins and minerals.
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
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personalized Nutrition Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
