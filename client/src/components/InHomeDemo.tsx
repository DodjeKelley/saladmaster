import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function InHomeDemo() {
  return (
    <section id="in-home-demo" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">We Come To You!</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Experience the Saladmaster difference in the comfort of your own kitchen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="font-heading font-semibold text-2xl mb-4">Personalized In-Home Demonstrations</h3>
              <p className="text-gray-600 mb-4">
                Sharon and Dhong, your Certified Saladmaster Cooking Coaches, will travel to any home in Southern California 
                to provide a personalized cooking demonstration with Saladmaster's premium cookware.
              </p>
              <p className="text-gray-600 mb-4">
                Our in-home cooking shows are completely free and include:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                <li>A gourmet meal preparation using your own ingredients</li>
                <li>Hands-on experience with Saladmaster cookware</li>
                <li>Custom cooking tips tailored to your diet and preferences</li>
                <li>Nutritional guidance and healthier cooking methods</li>
                <li>No obligation to purchase - just enjoy the experience!</li>
              </ul>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-gray-700">100% Satisfaction Guarantee</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <Link href="#schedule">Schedule Your Free Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-700 mb-2">Serving All of Southern California</h4>
                  <p className="text-gray-600">
                    From San Diego to Santa Barbara and everywhere in between, we'll bring the Saladmaster experience to your doorstep.
                  </p>
                </div>
                
                <div className="rounded-lg bg-green-50 p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-700 mb-2">Exclusive Host Benefits</h4>
                  <p className="text-gray-600">
                    Host a group demonstration and receive special Saladmaster gifts and exclusive offers as our way of saying thank you.
                  </p>
                </div>
                
                <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-700 mb-2">Weekday & Weekend Availability</h4>
                  <p className="text-gray-600">
                    Flexible scheduling to accommodate your busy lifestyle – daytime, evening, and weekend appointments available.
                  </p>
                </div>
                
                <div className="text-center pt-4">
                  <p className="text-sm font-medium text-gray-500">Contact us today to secure your preferred date!</p>
                  <p className="text-primary font-bold text-lg">(714) 504-3014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}