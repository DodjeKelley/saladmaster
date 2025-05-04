import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pl-8 lg:pr-16 mb-10 lg:mb-0 mx-auto max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Premium Cookware for Healthier Living
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl mb-6 leading-tight">
              Cooking for <span className="text-primary">Health</span> & <span className="text-secondary">Happiness</span>
            </h1>
            <p className="text-lg mb-4 text-gray-700">
              Discover the transformative power of nutrition-based cooking that preserves essential vitamins and minerals while enhancing natural flavors in every dish. With the right cookware and techniques, you can unlock the full potential of fresh ingredients, retaining up to 93% more nutrients than conventional cooking methods.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Embrace a lifestyle where healthy eating becomes a delicious daily practice, not a sacrifice. By cooking without added oils or excessive water, you'll experience food as nature intended—vibrant in color, rich in flavor, and abundant in the nutrients your body needs for optimal health and longevity. This approach to cooking doesn't just change meals; it transforms your relationship with food and enhances overall wellbeing.
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
            <div className="space-y-4">
              {/* Top: Food images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Image 1: Healthy meal */}
                <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src="/images/healthy-meal.jpg" 
                    alt="Healthy grilled chicken with fresh vegetable salad" 
                    className="w-full h-64 md:h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                    <p className="text-white font-medium text-sm">Healthy meals that nourish both body and soul</p>
                  </div>
                </div>
                
                {/* Image 2: Food preparation */}
                <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src="/images/cooking-vegetables.jpg" 
                    alt="Preparing fresh vegetables for a healthy meal" 
                    className="w-full h-64 md:h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                    <p className="text-white font-medium text-sm">Fresh ingredients for maximum nutrients and flavor</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom: Premium cookware image */}
              <div className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                  src="/images/saladmaster-cookware.webp" 
                  alt="Premium Saladmaster stainless steel cookware set" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent py-4 px-4">
                  <p className="text-white font-medium text-sm">Life Long Cookware that can be passed from one Generation to the next</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
