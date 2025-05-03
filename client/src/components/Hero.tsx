import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Cooking for <span className="text-primary">Health</span> & <span className="text-secondary">Happiness</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Meet Sharon and Dhong, Certified Saladmaster Cooking Coaches bringing healthier cooking methods to Santa Clarita and beyond.
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
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/30609688/pexels-photo-30609688.jpeg" 
                alt="Happy couple cooking together in a modern kitchen" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">Certified Saladmaster Cooking Coaches since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
