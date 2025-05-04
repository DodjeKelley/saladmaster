import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Premium Cookware for Healthier Living
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Cooking for <span className="text-primary">Health</span> & <span className="text-secondary">Happiness</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Discover the transformative power of nutrition-based cooking that preserves vitamins and minerals while enhancing flavor. Embrace a lifestyle where healthy eating becomes a delicious daily practice, not a sacrifice.
            </p>
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
                Discover Health Benefits
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Image 1: Healthy meal */}
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/images/healthy-meal.jpg" 
                  alt="Healthy grilled chicken with fresh vegetable salad" 
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                  <p className="text-white font-medium text-sm">Delicious food that nourishes your body and soul</p>
                </div>
              </div>
              
              {/* Image 2: Food preparation */}
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/images/cooking-vegetables.jpg" 
                  alt="Preparing fresh vegetables for a healthy meal" 
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                  <p className="text-white font-medium text-sm">Transform fresh ingredients into nourishing meals</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-white/90 p-3 rounded-lg shadow-md text-center">
              <p className="text-primary font-medium">Experience premium cookware that preserves nutrients and enhances flavors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
