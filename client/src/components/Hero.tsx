import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import headerImage1 from "../assets/images/headerimage1.jpg";
import headerImage2 from "../assets/images/headerimage2.jpg";
import potsAndPans from "../assets/images/potsandpans.webp";

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-12 md:pt-20 lg:pt-16 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pl-8 lg:pr-16 mb-6 lg:mb-0 mx-auto max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-3">
              Premium Cookware for Healthier Living
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl mb-4 leading-tight">
              Cooking for <span className="text-primary">Health</span> & <span className="text-secondary">Happiness</span>
            </h1>
            <p className="text-lg mb-4 text-gray-700">
              Transform your health and dining experience with innovative cookware that preserves up to 93% more nutrients while enhancing natural flavors
              and reducing oils. Our nutrition-based cooking system transforms everyday meals into vibrant, nutrient-rich experiences that 
              revolutionize your relationship with food and overall wellbeing, making healthy eating both delicious and effortless.
            </p>            
            <div className="flex flex-col sm:flex-row gap-4 mb-2">              
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
            <div className="space-y-3">
              {/* Top: Food images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Image 1: Healthy meal */}
                <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={headerImage1} 
                    alt="Healthy grilled chicken with fresh vegetable salad" 
                    className="w-full h-60 md:h-68 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                    <p className="text-white font-medium text-sm">Healthy meals that nourish both body and soul</p>
                  </div>
                </div>
                
                {/* Image 2: Food preparation */}
                <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={headerImage2} 
                    alt="Preparing fresh vegetables for a healthy meal" 
                    className="w-full h-60 md:h-68 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                    <p className="text-white font-medium text-sm">Fresh ingredients for maximum nutrients and flavor</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom: Premium cookware image */}
              <div className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                  src={potsAndPans} 
                  alt="Premium Saladmaster stainless steel cookware set" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent py-4 px-4">
                  <p className="text-white font-medium text-sm">Life Long Cookware that can be passed from one Generation to the next!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
