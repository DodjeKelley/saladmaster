import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Southern California's Trusted Saladmaster Coaches
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Cooking for <span className="text-primary">Health</span> & <span className="text-secondary">Happiness</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Meet Sharon and Dhong, your Certified Saladmaster Cooking Coaches bringing healthier cooking methods to Santa Clarita and all of Southern California. Experience the difference of waterless, oil-free cooking.
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
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/images/hero-couple.webp" 
                alt="Sharon and Dhong - Certified Saladmaster Cooking Coaches" 
                className="w-full h-[450px] md:h-[500px] object-cover rounded-xl"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent py-8 px-6">
                <div className="flex flex-col gap-1">
                  <p className="text-white text-lg font-medium">Sharon & Dhong</p>
                  <p className="text-white/90 font-medium">Certified Saladmaster Cooking Coaches since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
