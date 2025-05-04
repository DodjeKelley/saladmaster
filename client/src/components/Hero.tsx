import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Transform Your Wellness Journey Through Nutrition
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              The Path to <span className="text-primary">Vibrant Health</span> Begins in Your <span className="text-secondary">Kitchen</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Experience the revolutionary Saladmaster cooking system that preserves up to 93% of nutrients in your food. Join Sharon and Dhong to discover how proper cookware and techniques can transform your health and vitality.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Waterless, oil-free cooking for maximum nutrition</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Proven by University of Wisconsin studies</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lower cholesterol and improve energy levels</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToElement('schedule')}
                className="bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6"
                size="lg"
              >
                Schedule Your Free Demo
              </Button>
              <Button 
                onClick={() => scrollToElement('benefits')}
                variant="outline"
                className="border-2 border-secondary hover:bg-secondary hover:text-white text-secondary text-center font-semibold py-3 px-6"
                size="lg"
              >
                Explore Health Benefits
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/images/healthy-meal.jpg" 
                  alt="Nutritious healthy meal cooked with Saladmaster" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">Nutrient-rich meals with vibrant flavor</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/images/cooking-vegetables.jpg" 
                  alt="Fresh vegetables being prepared for healthy cooking" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">Preserving vital nutrients while cooking</p>
                </div>
              </div>
              
              <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 mt-4">
                <img 
                  src="/images/hero-couple.webp" 
                  alt="Sharon and Dhong - Certified Saladmaster Cooking Coaches" 
                  className="w-full h-48 object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-lg font-medium">Sharon & Dhong</p>
                    <p className="text-white/90 text-sm">Your Certified Saladmaster Cooking Coaches since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
